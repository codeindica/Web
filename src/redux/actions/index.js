import { LINK_VALUE } from "./types";

export function goToLink(payload) {
  return {
    type: LINK_VALUE,
    payload
  };
}