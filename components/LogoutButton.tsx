// components/LogoutButton.tsx
"use client"
import { useRouter } from "next/navigation"
// import { useState } from "react"
import AlertWithDialogue from "./AlertWithDialogue"


export default function LogoutButton() {
  const router = useRouter()
  // const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    try {
      // await fetch("/api/auth/logout", { method: "POST" })
      localStorage.removeItem("user");
      router.push("/login")
      router.refresh()
    } catch {
      console.error("Logout failed")
    } 
    // finally {
    //   setLoading(false)
    // }
  }

  return (
    <AlertWithDialogue
      buttonText="Logout"
      buttonVariant="outline"
      confirmText="Yes"
      cancelText="No"
      title="Logout"
      message="Are you sure you want to logout?"
      confirmFunction={handleLogout}
    />
  )
}