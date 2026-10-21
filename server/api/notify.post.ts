export default defineEventHandler(async (event) => {
  const { telegramToken, telegramChatId } = useRuntimeConfig();
  const body = await readBody<{ text?: string; markdown?: boolean; silent?: boolean; visit?: string }>(event);

  if (!telegramToken || !telegramChatId) {
    // visit tracking (silent) must never produce errors; the contact form still reports failure
    if (body?.silent) return { ok: false };
    throw createError({ statusCode: 500, statusMessage: "Notifications not configured" });
  }

  let text = String(body?.text ?? "").slice(0, 3500);
  let markdown = body?.markdown;
  if (body?.visit) {
    // location comes from the hosting platform's geo headers
    const h = getRequestHeaders(event);
    const info = {
      ip: (h["x-forwarded-for"] || "").split(",")[0].trim() || undefined,
      city: h["x-vercel-ip-city"] ? decodeURIComponent(h["x-vercel-ip-city"] as string) : undefined,
      region: h["x-vercel-ip-country-region"],
      country: h["x-vercel-ip-country"],
      timezone: h["x-vercel-ip-timezone"],
    };
    const code = JSON.stringify(info).replace(/[`\\]/g, "\\$&");
    const page = String(body.visit).replace(/[^\w ]/g, "").slice(0, 40);
    text = `Kimdir porfolioni kuzatmoqda\\! ${page}\n\`\`\`${code}\`\`\``;
    markdown = true;
  }
  if (!text) {
    throw createError({ statusCode: 400, statusMessage: "Empty message" });
  }

  const res = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: telegramChatId,
      text,
      ...(markdown ? { parse_mode: "MarkdownV2" } : {}),
    }),
  });
  if (!res.ok) {
    throw createError({ statusCode: 502, statusMessage: "Telegram request failed" });
  }
  return { ok: true };
});
