import Link from 'next/link'
import React from 'react'

const links = [
    {name:"Home", path: "/" },
    {name:"Blogs", path: "/blogs" },
    {name:"Products", path: "/products" },
    {name:"Dashboard", path: "/dashboard" },
    {name:"Shop", path: "/shop" },
]

export default function Navigation() {
  return (
    <div>
        {
            links.map(link => (
                <Link key={link.name} href={link.path} className='text-blue-500 hover:text-red-700 px-3' >
                    {link.name}{' '}
                </Link>

            ))
        }
    </div>
  )
}
