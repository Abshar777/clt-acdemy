"use client";
import PageTitleContainer from '@/components/global/pageTitleContainer';
import Disclaimer from '@/components/page-sections/terms/disclaimer';

import { Metadata } from 'next';
import React from 'react'



const page = () => {
  return (
    <>
        <PageTitleContainer
        title="Disclaimer"
        description="This is the disclaimer page for the website."
      />
      <Disclaimer/>
    </>
  )
}

export default page
