import React, {useState} from 'react';
import CharacterView from '../components/characterView';
import WardrobeView from '../components/wardrobeView';


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
        <>
        <div>
        <CharacterView wearing = {wearing} />
        <WardrobeView dressUp = {dressUp} wearing = {wearing} changeType = {changeType} currentType = {currentType}/>
        </div>
        </>
    )
}

export default DressUpContainer;
