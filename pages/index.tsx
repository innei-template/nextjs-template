import { NextPage } from 'next'
import React from 'react'
import { BasicLayout } from '../layouts/BasicLayout'

const IndexPage: NextPage = () => {
  return (
    <BasicLayout>
      <div className="flex max-w-xl m-auto">
        <span className="text-lg ">Hello World</span>
      </div>
    </BasicLayout>
  )
}

export default IndexPage
