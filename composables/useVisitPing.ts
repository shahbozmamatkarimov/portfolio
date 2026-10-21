// silent visit notification; location is resolved server-side so no third-party request runs in the browser
export function visitPing(page: string) {
  $fetch("/api/notify", { method: "POST", body: { visit: page, silent: true } }).catch(() => {});
}
