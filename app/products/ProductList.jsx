import Link from 'next/link'
import React, { use } from 'react'

//https:product-app-101-server.vercel.app/api/products

async function getProducts() {

  // getStaticProps

  const res = await fetch("https:product-app-101-server.vercel.app/api/products")

  //getServerSideProps
  //  const res = await fetch("https:product-app-101-server.vercel.app/api/products", { cache: "no-store" })


  return res.json()
}

export default function ProductList() {

  const products = use(getProducts())

  return (
    <div>
    
    <div >
      { products.map(product => (
        <div key={product.name}>
        <Link key={product.name} href={`/products/${product.name.replace(/\s+/g, "-").toLowerCase()}`} className='text-blue-600 hover:text-red-800 ' >
          {product.name}
        </Link>
        </div>
      ))}
    </div>
    </div>
  )
}
