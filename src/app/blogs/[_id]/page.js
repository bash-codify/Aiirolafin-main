'use client'

import BlogsDetails from "@/Components/blog/BlogsDetails";
import { client } from "../../../../sanity/lib/client";
import { useParams } from "next/navigation";

function getBlogsDetails(){

  const param = useParams()
  
 

  const query = client.fetch(`*[_type == "post" && _id == '${param._id}' ][0]`)
  
  return query
}



export default async function Home() { 

  const query = await getBlogsDetails();

  return (
    <main>
      <div>
        <BlogsDetails query={query}/>
      </div>
    </main>
  )
}