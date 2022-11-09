import React from 'react'

// getStaticPaths in Old Nextjs

async function getProducts() {
  const res = await fetch("https:product-app-101-server.vercel.app/api/products")

    return res.json()
}

export async function generateStaticParams() {
  const products = await getProducts()

  return products.map(product => ({
    id: product.name.replace(/\s+/g, "-").toLowerCase()
  }) )
   

}

export default function ProductIndividualPage({params}) {
  return (
    <div className='mt-5 text-4xl text-red-600'>Product Individual Page: {params.id}</div>
  )
}
