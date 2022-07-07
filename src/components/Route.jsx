import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [pathname, setPathname] = useState(window.location.pathname)

  const onLocationChange = () => {
    setPathname(window.location.pathname)
  }
  
  useEffect(() => {
    window.addEventListener('popstate', onLocationChange, { capture: true })

    return () => {
      window.removeEventListener('popstate', onLocationChange, {capture: true})
    }
  }, [pathname])
  return pathname === path ? children  : null
}

export default Route;
