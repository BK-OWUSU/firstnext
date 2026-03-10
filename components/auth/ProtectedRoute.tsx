import React, { useState } from 'react'
import { redirect } from 'next/navigation';

export default function ProtectedRoute({children}: {children: React.ReactNode}) {
   const user = localStorage.getItem("user");
   if(!user) redirect("/login")
    // const [users, setUser] = useState<string | null>(()=> {
    //     return localStorage.getItem("user")
    // })
  return (
    <div>{children}</div>
  )
}
