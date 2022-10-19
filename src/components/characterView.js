import React, { useState } from 'react'
import model from '../imgs/12_27_dress up test1_model2.png'
import bootsWear from '../imgs/12_27_dress up test1_acc1_ver2.png'
import shellsWear from '../imgs/12_27_dress up test1_top2_ver2.png'
import jeansWear from '../imgs/12_27_dress up test1_bottom2.png'
import hairWear from '../imgs/12_27_dress up test1_acc2.png'
import shellBotWear from '../imgs/12_27_dress up test1_bottom1.png'
import dressWear from '../imgs/12_27_dress up test1_top1_ver2.png'
import { Box } from '@mui/material'

const styles = {
    charView: {
        backgroundColor: '#f662b9',
        padding: '10px',
        height: '100px',
        maxWidth: '100vw',
        maxHeight: '80vh',
        // height: '80%'
        // width: '500px'
    },

    topsImg: {
        width: '100%',
        gridColumnStart: 1,
        gridRowStart: 1,
        zIndex: 3
    },

    botImg: {
        width: '100%',
        gridColumnStart: 1,
        gridRowStart: 1,
        zIndex: 2
    },

    accImg: {
        width: '100%',
        gridColumnStart: 1,
        gridRowStart: 1,
        zIndex: 4
    },

    charImg: {
        maxWidth: '100%',
        maxHeight: '100%',
        gridColumnStart: 1,
        gridRowStart: 1
    },

    charHolder: {
        display: 'grid',
        gridTemplateColumns: '100%',
        gridTemplateRows: '100%',
        maxHeight: '85vh', 
        maxWidth: '100%'
    }
}

const CharacterView = ({ wearing }) => {

    const TopsRender = ({ view }) => {
        let topsSrc = null
        let topsAlt = ''
        if (view == 2) {
            topsSrc = shellsWear
            topsAlt = 'Shells'
        } else if (view == 6) {
            topsSrc = dressWear
            topsAlt = 'Dress'
        }
        else {
            topsSrc = null
            topsAlt = ''
        }

        return (
            <img src={topsSrc} alt={topsAlt} style={styles.topsImg} />
        )
    }

    const AccRender = ({ view }) => {
        let accSrc = null
        let accAlt = ''
        if (view == 1) {
            accSrc = bootsWear
            accAlt = 'Boots'
        } else if (view == 5) {
            accSrc = hairWear
            accAlt = 'Hair'
        }
        else {
            accSrc = null
            accAlt = ''
        }

        return (
            <img src={accSrc} alt={accAlt} style={styles.accImg} />
        )
    }

    const BottomsRender = ({ view }) => {
        let botSrc = null
        let botAlt = ''
        if (view == 3) {
            botSrc = jeansWear
            botAlt = 'Jeans'
        } else if (view == 4) {
            botSrc = shellBotWear
            botAlt = 'Shells Bottom'
        }
        else {
            botSrc = null
            botAlt = ''
        }

        return (
            <img src={botSrc} alt={botAlt} style={styles.botImg} />
        )
    }

    return (
        <>
            {/* <div style={styles.charView}> */}
                <div style={styles.charHolder}>
                    {/* <AccRender view={wearing.acc} />
                    <TopsRender view={wearing.top} />
                    <BottomsRender view={wearing.bottom} /> */}
                    {/* <img src={wearing.top[1] == 1 ? bootsWear : shellsWear} alt={wearing.top[0]} style={styles.topsImg} /> */}
                    {/* <img src={model} alt="model" style={styles.charImg} /> */}
                    <Box component='img' src={model} alt='model' style={styles.charImg} />
                </div>

            {/* </div> */}
        </>
    )
}
export default CharacterView
