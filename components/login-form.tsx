"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState<string>("")

  const user = {
    email: "ken@gmail.com",
    password: "12345"  
  }
  const router = useRouter();

  const handleLogin = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {email, password} = formData;
    const isAuthenticate = email === user.email && password === user.password;
    if (isAuthenticate) {
      const loggedInUser = {...user, isAuthenticate: isAuthenticate}
      localStorage.setItem("user", JSON.stringify(loggedInUser))
      router.push("/dashboard")
      router.refresh();
    }else {
      setError("Invalid Email or Password")
    }
  }

  return (
    <form onSubmit={handleLogin} className={cn("flex flex-col gap-6", className)} {...props} >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="kofi@example.com" 
          required
          value={formData.email}
          onChange={(e)=> {
            setFormData({...formData, email: e.target.value})
          }} 
          />
        </Field>
        <Field>
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Link href="/signup" className="ml-4 text-sm underline-offset-4 hover:underline">
               Forgot your password?
            </Link>
          </div>
          <Input id="password" type="password" required
            value={formData.password}
            onChange={(e)=> {
            setFormData({...formData, password: e.target.value})

          }}  
          />
        </Field>
        <Field>
          <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-400 hover:text-white">Login</Button>
        </Field>
        {error && <p className="text-red-500">{error}</p>}
        <FieldSeparator>Need an Account</FieldSeparator>
        <Field>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="underline underline-offset-4">
              Sign up
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
