import React from 'react';
import { Alert, Button, ButtonToolbar } from 'rsuite';
import createComponentExample from '@/utils/createComponentExample';

export default createComponentExample({
  id: 'Alert',
  examples: ['basic', 'duration', 'close'],
  dependencies: {
    ButtonToolbar,
    Button,
    Alert
  }
});
