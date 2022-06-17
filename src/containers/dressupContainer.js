import React, {useState} from 'react';
import CharacterView from '../components/characterView';
import WardrobeView from '../components/wardrobeView';


const DressUpContainer = () => {
    const baseWear = {
        top: [null, 0],
        bottom: null,
        shoes: null,
    }

    const [wearing, setWearing] = useState(baseWear)

    const dressUp = (type, value, view) => {

        setWearing(prevState => ({
            ...prevState,
            [type]: [value, view]
        }))

        // if (wearing.top == 'a longsleeve') {
        //     console.log("yes")
        //     setWearing(prevState => ({
        //         ...prevState,
        //         'top': [...value]
        //     }))
        // } else {
        //     setWearing(prevState => ({
        //         ...prevState,
        //         'top': 'a longsleeve'
        //     }))
        //     console.log("no")
        // }
    }

    return (
        <>
        <div>
        <CharacterView wearing = {wearing} />
        <WardrobeView dressUp = {dressUp}/>
        </div>
        </>
    )
}

export default DressUpContainer;
