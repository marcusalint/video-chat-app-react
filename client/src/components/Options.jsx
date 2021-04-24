import React from 'react'

const Options = ({children}) => {
  console.log(children.props)
  return (
    <div>
      Options
      {children}
      
    </div>
  )
}

export default Options
