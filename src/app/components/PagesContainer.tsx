import React, { ReactNode } from 'react'

function PagesContainer({children} : {
  children : React.ReactNode
}) {
  return (
    <div className='mx-auto max-w-7xl pt-16 lg:pt-10 sm:pb-24 px-6'>
      {children}
    </div>
  )
}

export default PagesContainer
