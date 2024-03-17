import * as React from 'react'

type Props = {
    children: React.ReactNode;
}

const Button = ({children}: Props) => {
  return (
    <div
    style={{
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: 'blue',
        color: 'white',
        cursor: 'pointer'
    }}
    >
        {children}
    </div>
  )
}

export { Button}