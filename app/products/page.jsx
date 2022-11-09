import ProductList from "./ProductList";
import { Suspense } from 'react'

export default function ProductPage() {

   return (
    <div>
    <h1 className='mt-5 text-4xl text-red-600'>Products Page</h1>

    {/* // Suspense only needed for large files */}
    <Suspense fallback={<p>Loading Products</p>}>
    <ProductList />
    </Suspense>
    <div >
      
    </div>
    </div>
  )
}
