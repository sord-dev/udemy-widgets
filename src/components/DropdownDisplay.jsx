import React from 'react'

function DropdownDisplay({color}) {
  return (
    <p className={color}> {`This text is ${color}!`}</p>
  )
}

export default DropdownDisplay