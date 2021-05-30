import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error, defaultStack } from '@pnotify/core';

error({
    title: 'Error',
    text: 'Something went wrong',
    delay: 3000
  });