import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaCard from './MediaCard'
const api_key = 'mHhii1Gnbhitd0GMvvHiXEtnqgZ8Lca5nfe2wY4e'

export default function Home() { 
    
    const [infoFromNasa, setInfoFromNasa] = useState('')

    useEffect(() => {
        const bringNasaData = async function () {
            const infoFromNasa = await Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
            setInfoFromNasa(infoFromNasa)
            // console.log(infoFromNasa.data);
        }
        bringNasaData()
    }, [])
    
    
    
    return (
        <div>
            <MediaCard key='1' title={infoFromNasa?.data?.title} url={infoFromNasa?.data?.url} explanation={infoFromNasa?.data?.explanation}  ></MediaCard>
        </div>
      )
}

//NASA APOD API req http req will be here 
///https://api.nasa.gov/planetary/apod?api_key=mHhii1Gnbhitd0GMvvHiXEtnqgZ8Lca5nfe2wY4e
// Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)