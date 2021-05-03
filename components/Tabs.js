import React from 'react'
import Link from 'next/link'

const Tabs = () => {
  return (
    <div>
      <Link href='/'>
        home
      </Link>
      <Link href='/notifications'>
        notification
      </Link>
    </div>
  )
}

export default Tabs
