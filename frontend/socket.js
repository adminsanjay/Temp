if (Notification.permission === "granted") {
    new Notification("You are subscribed to event updates!");
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification("You are subscribed to event updates!");
      }
    });
  }
  