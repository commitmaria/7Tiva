import { Suspense } from 'react'
import SquareClient from './SquareClient.tsx'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <SquareClient />
    </Suspense>
  )
}
