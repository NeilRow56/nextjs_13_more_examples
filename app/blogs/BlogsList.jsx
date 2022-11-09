"use client"

import useSWR from "swr"


const fetcher = ( path ) => fetch(`https:product-app-101-server.vercel.app/${path}`).then(res => res.json())

export default function BlogList() {

  const blogs = useSWR("api/products", fetcher)

  return (
    <div>
    
    <div>
      { blogs.data?.map(blog => (
        <div key={blog.name}  >
          {blog.name}
        </div>
      ))}
    </div>
    </div>
  )
}
