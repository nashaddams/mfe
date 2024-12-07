export interface UpdateAvailableEvent {
  show: boolean;
}

export type Events = "UPDATE_EVENT";

export const EventService = {
  dispatch: (e: Events, body?: CustomEventInit): void => {
    globalThis.dispatchEvent(new CustomEvent(e, body));
  },
  subscribe: (event: Events, listener: EventListener): void => {
    globalThis.addEventListener(event, listener);
  },
  unsubscribe: (event: Events, listener: EventListener): void => {
    globalThis.removeEventListener(event, listener);
  },
};
