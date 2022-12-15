import React, { useState } from 'react'
import imgcard from '../images/cardimgtwo.jpg'
import Cardimg from './Cardimg'
const Cardtwo = () => {
    const [condition, setCondition ] = useState(false)

    const data =[
        {
            title :"Aleph Zero Design to Care for the Environment",
            decript : "Our Carbon Footprint",
            img : imgcard,

        },
    ]
  return (
    <>
       {
        data.map((items,keys)=>{
            return(
                <Cardimg items={items} value={condition} />
            )

        })
    }
    </>
  )
}

export default Cardtwo
