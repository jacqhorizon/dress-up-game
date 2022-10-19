import React, { useState } from 'react'

import { Container, Box, Grid, useMediaQuery, IconButton } from '@mui/material'
import model from '../imgs/12_27_dress up test1_model2.png'

const DressUpContainer = () => {
    const baseWear = {
        top: {},
        bottom: {},
        acc: {}
    }
    const WARDROBE = [
        { type: 'top', alt: 'Shell Top', image: '12_27_dress_up_test1_top2_ver2.png', icon: '12_28_top2_icon.png' },
        { type: 'top', alt: 'Dress Top', image: '12_27_dress_up_test1_top1_ver2.png', icon: '12_28_top1_icon.png' },
        { type: 'acc', alt: 'Acc', value: '12_27_dress_up_test1_acc1_ver2.png', icon: '12_28_acc1_icon.png' }
    ]

    const [wearing, setWearing] = useState(baseWear)
    const [currentType, setType] = useState('top')
    const [filteredWardrobe, setFilteredWardrobe] = useState(WARDROBE.filter((item) => item.type == 'top'))

    const dressUp = (item) => {
        setWearing(prevState => ({
            ...prevState,
            [item.type]: item
        }))
    }

    const changeType = (type) => {
        setType(type)
        let tmp = WARDROBE.filter((item) => item.type == type)
        setFilteredWardrobe(tmp)
    }

    const TYPES = [
        { alt: 'top', icon: '12_28_top2_icon.png' },
        { alt: 'acc', icon: '12_28_acc1_icon.png' }
    ]

    // const TYPES = Array.from(new Set(WARDROBE.map((item) => item.type)))

    const styles = {
        alignment: {
            gridColumnStart: 1,
            gridRowStart: 1,
            maxHeight: '80vh',
            margin: 'auto auto'
        },
        icon: {
            width: '100px'
        },
        types: {
            width: '50px'
        }
    }

    return (
        <>
            <Box sx={{ position: 'absolute', bottom: 0, top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
                <Box style={{ backgroundColor: 'orange', display: 'grid', gridTemplateColumns: '100%', gridTemplateRows: '100%' }}>
                    {TYPES.map((type, index) => {
                        console.log(wearing[type.alt])
                        return (
                            <React.Fragment key={index}>
                                <img src={wearing[type.alt].image ? require(`../imgs/${wearing[type.alt].image}`) : null} style={{ ...styles.alignment, zIndex: 2 }} />
                            </React.Fragment>
                        )
                    })}
                    <img src={wearing.top.image ? require(`../imgs/${wearing.top.image}`) : null} style={{ ...styles.alignment, zIndex: 2 }} />
                    <img src={model} style={styles.alignment} />
                </Box>
                <Box sx={{ height: '100%', backgroundColor: 'pink', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                    <Box sx={{ backgroundColor: 'purple', display: 'flex', flexDirection: { xs: 'row', md: 'column' }, width: { xs: '100vw', md: '100px' } }}>
                        {TYPES.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <IconButton onClick={() => { changeType(item.alt) }}>
                                        <img src={require(`../imgs/${item.icon}`)} style={styles.types} />
                                    </IconButton>
                                </React.Fragment>
                            )
                        })}
                    </Box>
                    <Box sx={{ backgroundColor: 'green', display: 'flex', flexDirection: { xs: 'row', md: 'column' }, width: { xs: '100vw', md: '200px' } }}>
                        {filteredWardrobe.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div onClick={() => dressUp(item)}>
                                        <img src={require(`../imgs/${item.icon}`)} style={styles.icon} /></div>
                                </React.Fragment>
                            )
                        })}
                    </Box>
                </Box>
            </Box></>
    )
}

export default DressUpContainer
