import { Suspense } from 'react'
import FilterCanvasClient from './FilterCanvasClient'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <FilterCanvasClient />
    </Suspense>
  )
}
