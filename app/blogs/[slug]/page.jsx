import React from 'react'



export default function BlogIndividualPage({params}) {
  return (
    <div className='mt-5 text-4xl text-red-600'>Blog Individual Page: {params.slug}</div>
  )
}
