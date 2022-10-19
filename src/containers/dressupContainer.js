import React, { useState } from 'react'
import CharacterView from '../components/characterView'
import WardrobeView from '../components/wardrobeView'
import { Container, Box } from '@mui/material'
import model from '../imgs/12_27_dress up test1_model2.png'


const DressUpContainer = () => {
    const baseWear = {
        top: 0,
        bottom: 0,
        acc: 0,
    }

    const [wearing, setWearing] = useState(baseWear)
    const [currentType, setType] = useState('top')



    const dressUp = (type, view) => {

        setWearing(prevState => ({
            ...prevState,
            [type]: view
        }))

    }

    const changeType = (type) => {
        console.log(type)
        setType(type)
    }

    return (
        // <>
        //         <Box component='div' style={{backgroundColor: 'blue', height: '100vh'}}>
        //             hello
        //             <CharacterView wearing={wearing} />
        //             {/* <WardrobeView dressUp={dressUp} wearing={wearing} changeType={changeType} currentType={currentType} /> */}
        //         </Box>
        // </>

        <>
        <Box component='div' style={{backgroundColor: 'blue', maxWidth: '100vw'}}>
        <CharacterView wearing={wearing} />
            {/* <Box component='img' src={model} style={{maxHeight: '85vh', maxWidth: '100%'}} /> */}
            {/* <Box component='div' style={{backgroundColor: 'orange', maxHeight: '20vh'}}> */}
                <WardrobeView dressUp={dressUp} wearing={wearing} changeType={changeType} currentType={currentType}/>
                {/* </Box> */}
        </Box>
        </>
    )
}

export default DressUpContainer
