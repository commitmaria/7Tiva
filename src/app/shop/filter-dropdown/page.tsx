import { Suspense } from 'react'
import FilterDropdownClient from './FilterDropdownClient'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <FilterDropdownClient />
    </Suspense>
  )
}
