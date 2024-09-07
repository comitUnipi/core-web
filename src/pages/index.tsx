import Activity from '@/components/Activity'
import { Discover } from '@/components/Discover'
import { Mentoring } from '@/components/Mentoring'
import { Section } from '@/components/Section'

export default function Home() {
  return (
    <main>
      <Section />
      <Activity />
      <Discover />
      <Mentoring />
    </main>
  )
}
