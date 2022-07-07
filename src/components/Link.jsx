import React from 'react'

function Link({className, href, children}) {

    const handleClick = (e) => {
        e.preventDefault()
        window.history.pushState({}, '', href)

        const newEvent = new PopStateEvent('popstate')
        window.dispatchEvent(newEvent)
    }


  return (
    <a onClick={handleClick} href={href} className={className}>{children}</a>
  )
}

export default Link