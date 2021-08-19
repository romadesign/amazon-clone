import React from 'react'
import Product from './Product'
import { useRouter } from 'next/router'

function Products({products}) {

    const router = useRouter()

    return (
            <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-50 mx-auto'>
                {
                    products
                    .slice(0, 4)
                    .map(({id, title, price, description, category, image}) => (
                        <div key={id}     className="cursor-pointer" onClick={() => router.push(`/detail/${id}`)}>
                        <Product 
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                        />
                        </div>
                    ))
                }
            <img 
                className="md:col-span-full"
                src="https://links.papareact.com/dyz" alt=""/>

                <div className="md:col-span-2">
                {
                    products
                    .slice(4, 5)
                    .map(({id, title, price, description, category, image}) => (
                        <div key={id} className="cursor-pointer" onClick={() => router.push(`/detail/${id}`)}>
                        <Product 
                            id={id}
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                        />
                        </div>
                    ))
                }
                </div>
                {
                    products
                    .slice(5)
                    .map(({id, title, price, description, category, image}) => (
                        <div key={id} className="cursor-pointer" onClick={() => router.push(`/detail/${id}`)}>
                        <Product 
                            
                            id={id}
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                        />
                        </div>
                    ))
                } 
            </div>
    )
}

export default Products
