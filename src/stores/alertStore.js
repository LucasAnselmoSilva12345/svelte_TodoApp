import { writable } from 'svelte/store';

export const ALERT_TYPE = {
  DANGER: 'DANGER',
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
};

Object.freeze(ALERT_TYPE);

export const alertMessage = writable('fa');
export const alertType = writable('');

export const displayAlert = (message, type = ALERT_TYPE.INFO, resetTime) => {
  alertMessage.set(message);
  alertType.set(type);

  if (resetTime) {
    setTimeout(() => {
      alertMessage.set('');
    }, resetTime);
  }
};
