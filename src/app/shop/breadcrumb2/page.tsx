import { Suspense } from 'react'
import Breadcrumb2Client from './Breadcrumb2Client'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Breadcrumb2Client />
    </Suspense>
  )
}
