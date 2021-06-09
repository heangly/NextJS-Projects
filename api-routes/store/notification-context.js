import { useState, createContext } from 'react'

const NotificationContext = createContext({
  notification: null,
  showNotification() {},
  hideNotification() {}
})

export const NotificationContextProvider = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState(null)

  const showNotification = (notificationData) => {
    setActiveNotification(notificationData)
  }

  const hideNotification = () => {
    setActiveNotification(null)
  }

  const context = {
    notification: activeNotification,
    showNotification,
    hideNotification
  }

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext
