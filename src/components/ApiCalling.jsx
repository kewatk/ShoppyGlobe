import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ApiCalling() {

    const [allRestaurantArr,setAllRestaurantArr] = useState([]);

    useEffect(()=>{
        const API = "https://dummyjson.com/products";
        async function calling(){
            let resp = await axios.get(API);
            console.log(resp, "resp");
            setAllRestaurantArr(resp.products, "resp");
        } 
        calling()   
    },[])

  return allRestaurantArr;
}

export default ApiCalling;