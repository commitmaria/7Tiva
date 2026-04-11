import { Suspense } from 'react'
import DefaultClient from './DefaultClient'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <DefaultClient />
    </Suspense>
  )
}
