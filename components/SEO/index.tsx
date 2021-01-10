import merge from 'lodash/merge'
import { NextSeo, NextSeoProps } from 'next-seo'
import type { OpenGraph } from 'next-seo/lib/types'
import { FC } from 'react'
import { SeoConfig } from '../../seo.config'

type SEOProps = {
  title: string
  description?: string
  openGraph?: { type?: 'website' | 'article' } & OpenGraph
} & NextSeoProps

export const SEO: FC<SEOProps> = (props) => {
  const { title, description, openGraph, ...rest } = props

  const Title = title + ' - ' + SeoConfig.site_name
  return (
    <NextSeo
      {...{
        title,
        titleTemplate: '%s - ' + SeoConfig.site_name,
        openGraph: merge(
          {
            // profile: {
            //   username: user.name || user.username,
            // },
            type: 'article',
            locale: 'zh-cn',
            site_name: SeoConfig.site_name,
            description: description || '',
            // article: {
            //   authors: [user.name || (userStore.name as string)],
            // },
            title: Title,
            // images: [
            //   {
            //     url: getRandomImage().pop() as string,
            //     alt: title + ' - ' + seo.title || appStore.title,
            //   },
            // ],
          } as OpenGraph,
          openGraph,
        ),
        description: description || '',
        // twitter: {
        //   cardType: 'summary',
        //   site: configs.url,
        // },

        ...rest,
      }}
    />
  )
}

export const Seo = SEO
