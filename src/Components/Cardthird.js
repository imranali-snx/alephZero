import React, { useState } from 'react'
import imgcardl from '../images/cardimgleftside.jpg'
import Cardimg from './Cardimg'
const Cardthird = () => {
    const [condition, setCondition ] = useState("leftside")
    const [first, setFirst]=useState("fade-right");

    const data =[
        {
            title :"Curious about Upcoming Network Upgrades?",
            decript : "Go to the Road map",
            img : imgcardl,

        },
    ]
  return (
    <>
    {
        data.map((items,keys)=>{
            return(
                <Cardimg items={items} value={condition}  effect={first}/>
            )

        })
    }
      
    </>
  )
}

export default Cardthird
