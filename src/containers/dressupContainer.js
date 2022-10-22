import React, { useState } from 'react'
import { Box, IconButton } from '@mui/material'
import model from '../imgs/base_01.png'
import BACKGROUND from '../imgs/BACKGROUND.png'

const DressUpContainer = () => {
    const baseWear = {
        back: {},
        head: {},
        dress: {},
        tail: {},
        feetAcc: {},
        bot: {},
        top: {},
        handAcc: {},
        hold: {},
        neck: {},
        acc: {},
        shoe: {}
    }
    const WARDROBE = [
        { type: 'acc', subType: 'head', alt: 'Red Cheerleader Bow', image: 'acc_01.png', icon: 'previews/acc_01prev.png' },
        { type: 'acc', subType: 'hold', alt: 'Red Cheerleader Pom pom', image: 'acc_02.png', icon: 'previews/acc_02prev.png' },
        { type: 'acc', subType: 'acc', alt: 'Red Clown Nose', image: 'acc_03.png', icon: 'previews/acc_03prev.png' },
        { type: 'acc', subType: 'handAcc', alt: 'Black Leather Gloves', image: 'acc_04.png', icon: 'previews/acc_04prev.png' },
        { type: 'acc', subType: 'neck', alt: 'Blackbeards beard', image: 'acc_05.png', icon: 'previews/acc_05prev.png' },
        { type: 'acc', subType: 'handAcc', alt: 'Blue Nitrile Gloves', image: 'acc_06.png', icon: 'previews/acc_06prev.png' },
        { type: 'acc', subType: 'feetAcc', alt: 'Tall white socks', image: 'acc_07.png', icon: 'previews/acc_07prev.png' },
        { type: 'acc', subType: 'head', alt: 'Nurse Hat', image: 'acc_08.png', icon: 'previews/acc_08prev.png' },
        { type: 'acc', subType: 'handAcc', alt: 'Black and Red wrist ruffles', image: 'acc_09.png', icon: 'previews/acc_09prev.png' },
        { type: 'acc', subType: 'neck', alt: 'Black and Red neck ruffle', image: 'acc_10.png', icon: 'previews/acc_10prev.png' },
        { type: 'acc', subType: 'tail', alt: 'Twin tails with blue stripes', image: 'acc_11.png', icon: 'previews/acc_11prev.png' },
        { type: 'acc', subType: 'tail', alt: 'tail with blue stripes', image: 'acc_12.png', icon: 'previews/acc_12prev.png' },
        { type: 'acc', subType: 'back', alt: 'Purple bat wings', image: 'acc_13.png', icon: 'previews/acc_13prev.png' },
        { type: 'acc', subType: 'handAcc', alt: 'Purple stripe fingerless gloves', image: 'acc_14.png', icon: 'previews/acc_14prev.png' },
        { type: 'acc', subType: 'acc', alt: 'Spikey purple belts', image: 'acc_15.png', icon: 'previews/acc_15prev.png' },
        { type: 'acc', subType: 'tail', alt: 'Purple devil tail', image: 'acc_16.png', icon: 'previews/acc_16prev.png' },

        { type: 'bot', alt: 'Red cheerleader skirt', image: 'bot_01.png', icon: 'previews/bot_01prev.png' },
        { type: 'bot', alt: 'Blackbeards leather pants', image: 'bot_02.png', icon: 'previews/bot_02prev.png' },
        { type: 'bot', alt: 'Black shorts with fishnet tights', image: 'bot_03.png', icon: 'previews/bot_03prev.png' },
        { type: 'bot', alt: 'Long purple pants', image: 'bot_04.png', icon: 'previews/bot_04prev.png' },

        { type: 'shoe', alt: 'White tennis shoes', image: 'shoe_01.png', icon: 'previews/shoe_01prev.png' },
        { type: 'shoe', alt: 'Black leather boots', image: 'shoe_02.png', icon: 'previews/shoe_02prev.png' },
        { type: 'shoe', alt: 'Red heels', image: 'shoe_03.png', icon: 'previews/shoe_03prev.png' },
        { type: 'shoe', alt: 'Black heeled boots', image: 'shoe_04.png', icon: 'previews/shoe_04prev.png' },
        { type: 'shoe', alt: 'Sonic Tails red shoes', image: 'shoe_05.png', icon: 'previews/shoe_05prev.png' },
        { type: 'shoe', alt: 'Spikey purple boots', image: 'shoe_06.png', icon: 'previews/shoe_06prev.png' },

        { type: 'top', alt: 'Red Cheerleader top', image: 'top_01.png', icon: 'previews/top_01prev.png' },
        { type: 'top', alt: 'Blackbeards leather jacket', image: 'top_02.png', icon: 'previews/top_02prev.png' },
        { type: 'top', subType: 'dress', alt: 'White nurse dress with red top', image: 'top_03.png', icon: 'previews/top_03prev.png' },
        { type: 'top', alt: 'Black turtleneck', image: 'top_04.png', icon: 'previews/top_04prev.png' },
        { type: 'top', alt: 'Purple tanktop with star straps', image: 'top_05.png', icon: 'previews/top_05prev.png' },

    ]

    const RENDER = Array.from(new Set(WARDROBE.map((item) => { return item.subType })))

    const [wearing, setWearing] = useState(baseWear)
    const [currentType, setType] = useState('acc')
    const [filteredWardrobe, setFilteredWardrobe] = useState(WARDROBE.filter((item) => item.type == 'acc'))

    const dressUp = (item) => {
        let set
        if (item.subType) {
            set = item.subType
        } else {
            set = item.type
        }

        setWearing((prevState) => {

            if (prevState[set].image == item.image) {
                return ({ ...prevState, [set]: {} })
            } else {
                if (set == 'dress') {
                    return ({ ...prevState, [set]: item, 'top': {}, 'bot': {} })
                } else if (set == 'top' || set == 'bot' && prevState.dress.image) {
                    return ({ ...prevState, [set]: item, 'dress': {} })
                } else {
                    return ({ ...prevState, [set]: item })
                }
            }
        })
    }

    const changeType = (type) => {
        setType(type)
        let tmp = WARDROBE.filter((item) => item.type == type)
        setFilteredWardrobe(tmp)
    }

    const TYPES = [
        { value: 'acc', alt: 'Accessory Options', icon: 'previews/acc_01prev.png' },
        { value: 'top', alt: 'Top Options', icon: 'previews/top_01prev.png' },
        { value: 'bot', alt: 'Bottom Options', icon: 'previews/bot_04prev.png' },
        { value: 'shoe', alt: 'Shoe Options', icon: 'previews/shoe_01prev.png' },
    ]

    const styles = {
        alignment: {
            gridColumnStart: 1,
            gridRowStart: 1,
            maxHeight: '75vh',
            maxWidth: '100vw',
            margin: 'auto auto'
        },
        icon: {
            maxHeight: '13vh'
        },
        types: {
            maxHeight: '7vh'
        },
        position: {
            position: 'absolute', bottom: 0, top: 0, left: 0, right: 0,
        }
    }

    return (
        <>
            <Box sx={{ ...styles.position, backgroundImage: `url(${BACKGROUND})`, backgroundSize: '200px', backgroundRepeat: 'repeat' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', position: 'absolute', bottom: 0, top: 0, left: { xs: 0, md: '20%' }, right: { xs: 0, md: '20%' } }}>
                    <Box style={{ backgroundColor: '#4fa1a5', display: 'grid', gridTemplateColumns: '100%', gridTemplateRows: '100%' }}>
                        {Object.keys(baseWear).map((type, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <img src={wearing[type].image ? require(`../imgs/${wearing[type].image}`) : null} style={{ ...styles.alignment, zIndex: index + 1 }} />
                                </React.Fragment>
                            )
                        })}
                        <img src={model} style={{
                            ...styles.alignment,
                            background: 'rgb(187,238,255)',
                            background: 'linear-gradient(180deg, rgba(187,238,255,1) 0%, rgba(124,225,195,1) 100%)',
                        }} />
                    </Box>

                    <Box sx={{ backgroundColor: '#BBEEFF', height: '100%', display: 'flex', flexDirection: 'column', padding: '0px 10px' }}>
                        <Box sx={{ display: 'flex', width: '100%', paddingTop: '10px' }}>
                            {TYPES.map((item, index) => {
                                let selected = false
                                if (currentType == item.value) {
                                    selected = true
                                }
                                return (
                                    <React.Fragment key={index}>
                                        <IconButton onClick={() => { changeType(item.value) }}
                                            sx={{
                                                backgroundColor: currentType == item.value ? '#fff' : 'rgba(255, 255, 255, 0.5)',
                                                margin: index == 0 ? '0px 5px 0px 0px' : '0px 5px',
                                                borderRadius: '10px 10px 0px 0px',
                                                '&:hover': { backgroundColor: '#fff' },
                                                maxHeight: '50px',
                                                "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                                                    borderRadius: "8px"
                                                }
                                            }}>
                                            <img src={require(`../imgs/${item.icon}`)} style={{ ...styles.types, opacity: currentType == item.value ? 1 : 0.8 }} />
                                        </IconButton>
                                    </React.Fragment>
                                )
                            })}
                        </Box>

                        <Box sx={{ backgroundColor: '#fff', overflowY: 'hidden', overflowX: 'scroll', display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
                            {filteredWardrobe.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div style={{ cursor: 'pointer' }} onClick={() => dressUp(item)}>
                                            <img src={require(`../imgs/${item.icon}`)} style={styles.icon} /></div>
                                    </React.Fragment>
                                )
                            })}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DressUpContainer
