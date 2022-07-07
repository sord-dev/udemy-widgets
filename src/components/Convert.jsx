import React from 'react'

function Convert({phrase, language}) {
  return (
    <>
    <h1>
        {phrase == ""
          ? "enter some text in the field to get a translation"
          : phrase}
      </h1>
      <h3>{`This text will be displayed in ${language.label}.`}</h3>

    </>
  )
}

export default Convert