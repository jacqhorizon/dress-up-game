import React, {useState} from 'react';
import model from '../imgs/12_27_dress up test1_model2.png'
import bootsWear from '../imgs/12_27_dress up test1_acc1_ver2.png'
import shellsWear from '../imgs/12_27_dress up test1_top2_ver2.png'

const styles = {
    charView: {
        backgroundColor: '#f662b9',
        padding: '10px',
        width: '500px'
    },

    topsImg: {
        width: '100%',
        gridColumnStart: 1,
        gridRowStart: 1,
        zIndex: 3
    },

    charImg: {
        width: '100%',
        gridColumnStart: 1,
        gridRowStart: 1
    },

    charHolder: {
        display: 'grid',
        gridTemplateColumns: '100%',
        gridTemplateRows: '100%'
    }
}

const CharacterView = ({wearing}) => {

    const ClothesRender = () => {
        if(wearing.top == 1) {
            return {clothes: bootsWear, alt: 'boots'}
        } else {
            return null
        }
    }

    return (
        <>
        <div style={styles.charView}>
            <p>This is the character view. This character is wearing {wearing.top}</p>
        <div style={styles.charHolder}>
        <img src={wearing.top[1] == 1 ? bootsWear : shellsWear} alt={wearing.top[0]} style={styles.topsImg} />
        <img src={model} alt="model" style={styles.charImg} />
        </div>

        </div>
        </>
    )
}
export default CharacterView;
