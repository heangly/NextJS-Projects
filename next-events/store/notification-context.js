import { createContext, useState } from 'react'

const NotificationContext = createContext({
  notification: null,
  showNotification: function ({ title, message, status }) {},
  hideNotification: function () {}
})

export const NotificationContextProvider = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState()

  const showNotificationHandler = ({ title, message, status }) => {
    setActiveNotification({
      title,
      message,
      status
    })
  }

  const hideNotificationHandler = () => {
    setActiveNotification(null)
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler
  }

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext
