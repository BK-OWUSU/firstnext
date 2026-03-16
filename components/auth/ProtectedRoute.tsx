"use client" 
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({children}: {children: React.ReactNode}) {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  useEffect(()=>{
  // ✅ localStorage only runs in browser (client side)
     const user = localStorage.getItem("user");
     if(!user) {
      router.push("/login")
     }
   },[router])

   
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user")
    if (!user) return null  // render nothing while redirecting
  }
  return (
    <div>{children}</div>
  )
}
