import { Suspense } from 'react'
import BreadcrumbImgClient from './BreadcrumbImgClient'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <BreadcrumbImgClient />
    </Suspense>
  )
}
