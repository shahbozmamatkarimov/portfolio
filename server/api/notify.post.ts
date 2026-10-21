export default defineEventHandler(async (event) => {
  const { telegramToken, telegramChatId } = useRuntimeConfig();
  const body = await readBody<{ text?: string; markdown?: boolean; silent?: boolean }>(event);

  if (!telegramToken || !telegramChatId) {
    // visit tracking (silent) must never produce errors; the contact form still reports failure
    if (body?.silent) return { ok: false };
    throw createError({ statusCode: 500, statusMessage: "Notifications not configured" });
  }

  const text = String(body?.text ?? "").slice(0, 3500);
  if (!text) {
    throw createError({ statusCode: 400, statusMessage: "Empty message" });
  }

  const res = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: telegramChatId,
      text,
      ...(body?.markdown ? { parse_mode: "MarkdownV2" } : {}),
    }),
  });
  if (!res.ok) {
    throw createError({ statusCode: 502, statusMessage: "Telegram request failed" });
  }
  return { ok: true };
});
