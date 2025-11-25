"use client";
import PageTitleContainer from '@/components/global/pageTitleContainer';
import Disclaimer from '@/components/page-sections/terms/disclaimer';
import Privacypolicy from '@/components/page-sections/terms/privacypolicy';

import { Metadata } from 'next';
import React from 'react'



const page = () => {
  return (
    <>
        <PageTitleContainer
        title="Privacy Policy"
        description="This is the privacy policy page for the website."
      />
      <Privacypolicy/>
    </>
  )
}

export default page
