import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Contact Us - CLT Academy",
    description: "Contact Us - CLT Academy is a platform for learning trading and investing.",
  };

const layout = ({ children }: { children: React.ReactNode } ) => {
  return (
    <>
      {children}
    </>
  )
}

export default layout
