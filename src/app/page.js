'use client'
import { Banner } from "@/Components/Banner/Banner";
import Test from "@/Components/Test";
import Blog from "@/Components/blog/Blog";
import Request from "@/Components/contactpage/Request";
import Properties from "@/Components/property/Properties";
import Aiirolafin from "@/Components/why-us/Aiirolafin";



export default function Home() {

  return (
    <main>
      <Banner/>
      <Aiirolafin/>
      <Properties />
      <Blog/>
      <Request/>
     
     
    </main>
  )
}
