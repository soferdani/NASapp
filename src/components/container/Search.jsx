import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import MediaCard from './MediaCard'


export default function Search() { 

    const [searchInput, setSearchInput] = useState ('')
    const [searchRes, setSearchRes] = useState ([])

    const searchHandel =  (e) => {
        setSearchInput(e.target.value)
    }

    const search = async function () {
        let tempData = await Axios.get(`https://images-api.nasa.gov/search?q=${searchInput}`)
        tempData = tempData.data.collection.items
        setSearchRes(tempData)
    }

    return (
        <>
            <div><input onChange={searchHandel} type="text" /><button onClick={search} >Search</button></div>
            {searchRes ? searchRes.map((m, i) =>
                <MediaCard
                    key={i}
                    title={m.data[0].title}
                    url={m.links ? m.links[0].href : null}
                ></MediaCard>) : null}
        </>
      )
} 


