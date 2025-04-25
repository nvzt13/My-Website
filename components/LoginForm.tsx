"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { Loader2Icon } from "lucide-react"

interface Admin {
  userName: string
  password: string
}
export function LoginForm() {

  const router = useRouter()
  const [formData, setFormData] = React.useState<Admin>({
    userName: "",
    password: ""
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try{
      const res = await fetch('/api/admin',{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData)
    })
  if (res.ok) {
  router.push("/admin");
}
    }catch(error){
      console.log(error)
    }
    console.log(formData)
  }
  return (
    <div>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your email and password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleFormSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="userName">User Name</Label>
                <Input
  id="userName"
  name="userName" // eklenen kısım
  type="text"
  placeholder="user name"
  onChange={handleChange}
  required
/>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
<Input
  id="password"
  name="password" // eklenen kısım
  type="password"
  placeholder="password"
  onChange={handleChange}
  required
/>
                </div>
                <Button type="submit" className="w-full">
                    Login
                  </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
