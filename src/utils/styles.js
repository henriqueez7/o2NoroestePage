import sharedStyles from "../styles/shared.module.css";

export const shared = sharedStyles;

export function createCx(...styleMaps) {
  const scopes = [...styleMaps, sharedStyles];
  return (...tokens) => cxFrom(scopes, ...tokens);
}

export function cx(...tokens) {
  return cxFrom([sharedStyles], ...tokens);
}

function cxFrom(scopes, ...tokens) {
  return tokens
    .filter(Boolean)
    .map((token) => scopes.find((scope) => scope[token])?.[token] ?? token)
    .join(" ");
}
