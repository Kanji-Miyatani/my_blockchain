import React from 'react'
import { ReactNode } from 'react';

type Props = {
    children : React.ReactElement 
}
const Layout =({ children }: Props)=> {
  return (
    <div className="container">
         <h1>サルでも作れるブロックチェーン</h1>
        {children}
    </div>
  )
}

export default Layout;