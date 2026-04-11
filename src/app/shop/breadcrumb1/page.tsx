import { Suspense } from 'react'
import Breadcrumb1Client from './Breadcrumb1Client'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Breadcrumb1Client />
    </Suspense>
  )
}
