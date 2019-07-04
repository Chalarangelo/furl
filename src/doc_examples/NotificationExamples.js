import React from 'react';
import { NotificationCenter, Notification, Button } from '../lib';

const NotificationExamples = (props) => {
  let notificationCenterRef = React.createRef();
  return (
  <div className="example-wrapper" style={{textAlign: 'center'}}>
    <Button onClick={() => notificationCenterRef.current.addNotification(
      <Notification>
        This is an important notification.
      </Notification>
    )}>Add notification
    </Button>
    <Button onClick={() => notificationCenterRef.current.addNotification(
      <Notification color='primary'>
        This is a primary notification.
      </Notification>
    )}>Add primary notification
    </Button>
    <Button onClick={() => notificationCenterRef.current.addNotification(
      <Notification color='secondary'>
        This is a secondary notification.
      </Notification>
    )}>Add secondary notification
    </Button>
    <Button onClick={() => notificationCenterRef.current.addNotification(
      <Notification color='success'>
        This is a success notification.
      </Notification>
    )}>Add success notification
    </Button>
    <Button onClick={() => notificationCenterRef.current.addNotification(
      <Notification color='warning'>
        This is a warning notification.
      </Notification>
    )}>Add warning notification
    </Button>
    <Button onClick={() => notificationCenterRef.current.addNotification(
      <Notification color='danger'>
        This is a danger notification.
      </Notification>
    )}>Add danger notification
    </Button>
    <NotificationCenter ref={notificationCenterRef} verticalPosition='top' horizontalPosition='right' />
  </div>
);}

export default NotificationExamples;