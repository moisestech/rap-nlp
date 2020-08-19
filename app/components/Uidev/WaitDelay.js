import React from 'react'

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '100px',
    textAlign: 'center',
  }
}

function Wait ({ delay = 1000, placeholder, ui }) {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const id = window.setTimeout(() => {
      setShow(true)
    }, delay)

    return () => window.clearTimeout(id)
  }, [delay])

  return show === true
    ? ui
    :placeholder
}

export default function Waitdelay() {
  return (
    <div className='wait-delay' style={styles.content}>
      <Wait
        delay={3000}
        placeholder={<p>Waiting...</p>}
        ui={<p>This text should appear after 3 seconds.</p>} />
    </div>
  )
}