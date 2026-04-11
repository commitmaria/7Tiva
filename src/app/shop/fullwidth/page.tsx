import { Suspense } from 'react'
import FullwidthClient from './FullwidthClient'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <FullwidthClient />
    </Suspense>
  )
}
