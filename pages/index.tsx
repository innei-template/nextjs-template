import { NextPage } from 'next'
import React from 'react'
import { BasicLayout } from '../layouts/BasicLayout'

const IndexPage: NextPage = () => {
  return (
    <BasicLayout>
      <div className="max-w-xl m-auto py-5">
        <h1 className="text-4xl text-center block">Hello World</h1>
      </div>
    </BasicLayout>
  )
}

export default IndexPage
