import React, { useState } from 'react'
import imgcard from '../images/cardimgtwo.jpg'
import Cardimg from './Cardimg'
const Cardtwo = () => {
    const [condition, setCondition ] = useState(false)
    const [first, setFirst]=useState("fade-left");

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
                <Cardimg items={items} value={condition}  effect={first} />
            )

        })
    }
    </>
  )
}

export default Cardtwo
