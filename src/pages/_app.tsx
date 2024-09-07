import { Footer } from '@/components/app/Footer'
import Navbar from '@/components/app/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Head>
        <title>Comit Unipi</title>
        <meta
          name="description"
          content="Community of Information Technology (COMIT) adalah departement organisasi yang ada di Universitas Insan Pembangunan Indonesia"
        />
        <meta name="keywords" content="kata kunci, yang, relevan" />
        <meta property="og:title" content="Comit Unipi" />
        <meta
          property="og:description"
          content="Community of Information Technology (COMIT) adalah departement organisasi yang ada di Universitas Insan Pembangunan Indonesia"
        />
        <meta property="og:image" content="https://comit-unipi.vercel.app/favicon.png" />
        <meta property="og:url" content="https://comit-unipi.vercel.app" />
        <link rel="canonical" href="https://comit-unipi.vercel.app" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Comit" />
        <meta property="og:site_name" content="Comit Unipi" />
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content="Community of Information Technology (COMIT) adalah departement organisasi yang ada di Universitas Insan Pembangunan Indonesia" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@handleTwitter" />
        <meta property="twitter:title" content="Comit Unipi" />
        <meta
          property="twitter:description"
          content="Community of Information Technology (COMIT)"
        />
        <meta property="twitter:image" content="https://comit-unipi.vercel.app/favicon.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
