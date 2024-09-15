import Activity from '@/components/Activity'
import { Discover } from '@/components/Discover'
import { Mentoring } from '@/components/Mentoring'
import { Section } from '@/components/Section'
import Metadata from '@/lib/metadata'
import { globalBreadcrumbs } from '@/utils/breadcrumbs'

export default function Home() {
  return (
    <>
      <Metadata
        title="COMIT | Tentang Kami"
        description="Community of Information Technology (COMIT) adalah departement organisasi yang ada di Universitas Insan Pembangunan Indonesia"
        image="https://comit-unipi.vercel.app/favicon.png"
        url="https://comit-unipi.vercel.app"
        breadcrumbs={globalBreadcrumbs.beranda}
      />
      <Section />
      <Activity />
      <Discover />
      <Mentoring />
    </>
  )
}
