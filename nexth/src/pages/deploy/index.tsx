import Layout from '@/components/Layout/layout_light'
import DeployCard from './deploy'
import { ReactNode } from 'react'

import { Flex, useColorModeValue, Box } from '@chakra-ui/react'

export default function DeployPage({ children }: { children: ReactNode }) {
  return (
    <Layout>
      <DeployCard />
    </Layout>
  )
}
