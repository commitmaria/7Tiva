import { Suspense } from 'react'
import FilterOptionsClient from './FilterOptionsClient'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <FilterOptionsClient />
    </Suspense>
  )
}
