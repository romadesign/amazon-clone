import React, {useState} from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'

import ReactImageMagnify from 'react-image-magnify';


const MAX_RATING = 5
const MIN_RATING = 1

function Detalle({detail}) {

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )
    
    return (
        <>
            <Header />
            <div className="detail grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2" >
                <div className="bg-image">
                    {/* <div > 
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: `${detail.image}`,
                            
                        },
                        largeImage: {
                            src: `${detail.image}`,
                            width: 1800,
                            height: 1600
                        }
                    }} />
                    </div> */}
                    <Image src={detail.image} height={500} width={500} objectFit="contain" />
                </div>
                <div>
                <h4 className="my-3 font-medium text-3xl pt-10 pl-10 pr-10">{detail.title}</h4>
                 <div className="flex pl-10 pr-10">
                      {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <div  key={i} > <StarIcon className="h-5 text-yellow-500" /></div>
                        ))}
                    <span>valoración</span>
                 </div>
                 <div className="flex pl-10 pr-10">
                     <span>Precio:</span>
                     <div className="mb-5 pt-3">
                         <Currency quantity={detail.price} currency="EUR" />
                     </div>
                 </div>
                <div className="flex pl-10 pr-10">
                  <span className="font-light text-base">{detail.description}</span>
                </div>
                <div className="flex pl-10 pr-10">
                    <span>Category:</span>
                    <span className="pl-3">{detail.category}</span>
                </div>
                
                
                </div>
            </div>
            
        </>
    )
}

export default Detalle
