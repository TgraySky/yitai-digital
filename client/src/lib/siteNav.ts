export const SITE_WECHAT = "axh8123";
export const SITE_EMAIL = "lindseyrshaedach@gmail.com";

const SCROLL_KEY = "yitai-digital-scroll-to";

export function requestScrollToSection(id: string) {
  sessionStorage.setItem(SCROLL_KEY, id);
}

export function consumePendingScroll(): string | null {
  const id = sessionStorage.getItem(SCROLL_KEY);
  if (id) {
    sessionStorage.removeItem(SCROLL_KEY);
  }
  return id;
}

export async function copySiteWeChat(): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(SITE_WECHAT);
    return true;
  } catch {
    return false;
  }
}
