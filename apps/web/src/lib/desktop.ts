import type { TroupeDesktop } from "@troupe/contracts";

export type { TroupeDesktop } from "@troupe/contracts";

declare global {
  interface Window {
    troupeDesktop?: TroupeDesktop;
  }
}

export function desktopBridge(): TroupeDesktop | undefined {
  return typeof window === "undefined" ? undefined : window.troupeDesktop;
}

export function windowChromeKind(desktop?: TroupeDesktop): "spacer" | "darwin" | "controls" {
  if (!desktop) return "spacer";
  if (desktop.platform === "darwin") return "darwin";
  return "controls";
}
