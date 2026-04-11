import { Suspense } from 'react'
import SidebarListClient from './SidebarListClient'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <SidebarListClient />
    </Suspense>
  )
}
