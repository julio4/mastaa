import Layout from '@/components/Layout/layout'
import DeployCard from './deploy'
import { ReactNode } from 'react'

export default function DeployPage({ children }: { children: ReactNode }) {
  return (
    <Layout>
      <DeployCard />
    </Layout>
  )
}
