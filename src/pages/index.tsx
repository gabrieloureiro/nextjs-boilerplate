import { useToast, ToastMessage } from "@/hooks/useToast"
import React, {  useEffect } from "react"

export const info: ToastMessage = {
  title: 'Welcome to next-boilerplate',
  description: "We use styled-components",
  type: 'info'
}

const Home = () => {
  const { addToast } = useToast()

  useEffect(() => {
    addToast(info)
  }, [])

  return (
    <h1>Next-boilerplate + Styled Components</h1>
  )
}


export default Home
