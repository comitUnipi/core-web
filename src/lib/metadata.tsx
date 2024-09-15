import Head from 'next/head'
import React, { useEffect, useState } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  breadcrumbs?: { name: string; url: string }[]
}

const Metadata = ({
  title,
  description,
  keywords,
  image,
  url,
  breadcrumbs,
}: SEOProps) => {
  const [fullUrl, setFullUrl] = useState('')

  useEffect(() => {
    if (!fullUrl) {
      setFullUrl(url || window.location.href)
    }
  }, [fullUrl, url])

  const Keywords = [
    'comit',
    'comunity of information technology',
    'departement comit',
    'universitas insan pembangunan indonesia',
    'unipi',
    'belajar technology',
  ]

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        name="keywords"
        content={keywords ? keywords.join(', ') : Keywords.join(', ')}
      />
      {image && <meta property="og:image" content={image} />}
      {fullUrl && <meta property="og:url" content={fullUrl} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {breadcrumbs && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbs.map((crumb, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: crumb.name,
              item: crumb.url,
            })),
          })}
        </script>
      )}
    </Head>
  )
}

export default Metadata
