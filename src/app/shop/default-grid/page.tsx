import { Suspense } from 'react'
import DefaultGridClient from './DefaultGridClient'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <DefaultGridClient />
    </Suspense>
  )
}
