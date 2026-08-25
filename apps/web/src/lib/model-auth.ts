import type { ModelCatalogEntry } from "@troupe/contracts";
import { waitForModelOAuthCompletion } from "@troupe/core";
import { rpc } from "./rpc";

export type { ModelCatalogEntry, ModelCredential, ModelOAuthBegin } from "@troupe/contracts";
export { cancelModelOAuthAttempt, finishModelOAuthAttempt } from "@troupe/core";

export function providerHint(entry: ModelCatalogEntry) {
  if (entry.authHint) return entry.authHint;
  if (entry.signIn !== undefined) return "Sign in";
  if (entry.auth === "oauth") return "Skip or deploy key";
  return "API key";
}

export async function waitForModelOAuth(loginId: string, signal?: AbortSignal) {
  return waitForModelOAuthCompletion(() => rpc.models.completeOAuth({ loginId }, { signal }), {
    signal,
  });
}
