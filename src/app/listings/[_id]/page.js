'use client'

import ListingsDetails from "@/Components/property/ListingsDetails";
import { client } from "../../../../sanity/lib/client";
import { useParams } from "next/navigation";

function getListingsDetails(){

  const params = useParams()
  
 

  const query = client.fetch(`*[_type == "listings" && _id == '${params._id}' ][0]`)
  return query
}



export default async function Home() { 

  const query = await getListingsDetails();


  return (
    <main>
      <div>
        <ListingsDetails query={query}/>
      </div>
    </main>
  )
}