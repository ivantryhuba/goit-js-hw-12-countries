import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, error, defaultStack } from '@pnotify/core';

export function warning() {
  alert({
    title: 'ALARM',
    text: 'Please enter a more precise query',
    delay: 5000,
  });
}

export function bigError() {
  error({
    title: 'ERROR',
    text: 'Many matches, please enter a more precise query',
    delay: 5000,
  });
}



