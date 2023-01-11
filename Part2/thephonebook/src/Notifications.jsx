const Notifications = ({ message, setMessage, style }) => {
  if (message === null) {
    return
  } else {
    (setTimeout(() => { setMessage(null) }, 4000))
  }

  return (
    <div className={style}>
      {message}
    </div>
  )
}

export default Notifications