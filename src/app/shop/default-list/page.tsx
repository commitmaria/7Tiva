import { Suspense } from 'react'
import DefaultListClient from './DefaultListClient'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <DefaultListClient />
    </Suspense>
  )
}
