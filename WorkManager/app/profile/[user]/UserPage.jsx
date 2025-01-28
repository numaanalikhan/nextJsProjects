"use client"
import React from 'react'

import { useParams } from 'next/navigation'

function UserPageComp() {
  const data = useParams()
  console.log(data.user);
  
  return (
    <div>
        <p>This is {data.user} Profile Page</p>
    </div>
  )
}

export default UserPageComp