import { LINK_VALUE } from "./types";
import { SAVE_TOKEN} from './types';

export function updateLinkValue(payload) {
  return {
    type: LINK_VALUE,
    payload
  };
}

export function saveToken(payload) {
  return {
    type: SAVE_TOKEN,
    payload
  };
}