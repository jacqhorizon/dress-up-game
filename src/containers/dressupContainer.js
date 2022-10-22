import React, { useState } from 'react'

import { Container, Box, Grid, useMediaQuery, IconButton } from '@mui/material'
import model from '../imgs/base_01.png'

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
        {type: 'acc', subType: 'head', alt: 'Red Cheerleader Bow', image: 'acc_01.png', icon: 'previews/acc_01prev.png'},
        {type: 'acc', subType: 'hold', alt: 'Red Cheerleader Pom pom', image: 'acc_02.png', icon: 'previews/acc_02prev.png'},
        {type: 'acc', subType: 'acc', alt: 'Red Clown Nose', image: 'acc_03.png', icon: 'previews/acc_03prev.png'},
        {type: 'acc', subType: 'handAcc', alt: 'Black Leather Gloves', image: 'acc_04.png', icon: 'previews/acc_04prev.png'},
        {type: 'acc', subType: 'neck', alt: 'Blackbeards beard', image: 'acc_05.png', icon: 'previews/acc_05prev.png'},
        {type: 'acc', subType: 'handAcc', alt: 'Blue Nitrile Gloves', image: 'acc_06.png', icon: 'previews/acc_06prev.png'},
        {type: 'acc', subType: 'feetAcc', alt: 'Tall white socks', image: 'acc_07.png', icon: 'previews/acc_07prev.png'},
        {type: 'acc', subType: 'head', alt: 'Nurse Hat', image: 'acc_08.png', icon: 'previews/acc_08prev.png'},
        {type: 'acc', subType: 'handAcc', alt: 'Black and Red wrist ruffles', image: 'acc_09.png', icon: 'previews/acc_09prev.png'},
        {type: 'acc', subType: 'neck', alt: 'Black and Red neck ruffle', image: 'acc_10.png', icon: 'previews/acc_10prev.png'},
        {type: 'acc', subType: 'tail', alt: 'Twin tails with blue stripes', image: 'acc_11.png', icon: 'previews/acc_11prev.png'},
        {type: 'acc', subType: 'tail', alt: 'tail with blue stripes', image: 'acc_12.png', icon: 'previews/acc_12prev.png'},
        {type: 'acc', subType: 'back', alt: 'Purple bat wings', image: 'acc_13.png', icon: 'previews/acc_13prev.png'},
        {type: 'acc', subType: 'handAcc', alt: 'Purple stripe fingerless gloves', image: 'acc_14.png', icon: 'previews/acc_14prev.png'},
        {type: 'acc', subType: 'acc', alt: 'Spikey purple belts', image: 'acc_15.png', icon: 'previews/acc_15prev.png'},
        {type: 'acc', subType: 'tail', alt: 'Purple devil tail', image: 'acc_16.png', icon: 'previews/acc_16prev.png'},

        {type: 'bot', alt: 'Red cheerleader skirt', image: 'bot_01.png', icon: 'previews/bot_01prev.png'},
        {type: 'bot', alt: 'Blackbeards leather pants', image: 'bot_02.png', icon: 'previews/bot_02prev.png'},
        {type: 'bot', alt: 'Black shorts with fishnet tights', image: 'bot_03.png', icon: 'previews/bot_03prev.png'},
        {type: 'bot', alt: 'Long purple pants', image: 'bot_04.png', icon: 'previews/bot_04prev.png'},

        {type: 'shoe', alt: 'White tennis shoes', image: 'shoe_01.png', icon: 'previews/shoe_01prev.png'},
        {type: 'shoe', alt: 'Black leather boots', image: 'shoe_02.png', icon: 'previews/shoe_02prev.png'},
        {type: 'shoe', alt: 'Red heels', image: 'shoe_03.png', icon: 'previews/shoe_03prev.png'},
        {type: 'shoe', alt: 'Black heeled boots', image: 'shoe_04.png', icon: 'previews/shoe_04prev.png'},
        {type: 'shoe', alt: 'Sonic Tails red shoes', image: 'shoe_05.png', icon: 'previews/shoe_05prev.png'},
        {type: 'shoe', alt: 'Spikey purple boots', image: 'shoe_06.png', icon: 'previews/shoe_06prev.png'},

        {type: 'top', alt: 'Red Cheerleader top', image: 'top_01.png', icon: 'previews/top_01prev.png'},
        {type: 'top', alt: 'Blackbeards leather jacket', image: 'top_02.png', icon: 'previews/top_02prev.png'},
        {type: 'top', subType: 'dress', alt: 'White nurse dress with red top', image: 'top_03.png', icon: 'previews/top_03prev.png'},
        {type: 'top', alt: 'Black turtleneck', image: 'top_04.png', icon: 'previews/top_04prev.png'},
        {type: 'top', alt: 'Purple tanktop with star straps', image: 'top_05.png', icon: 'previews/top_05prev.png'},
        
        // { type: 'top', alt: 'Shell Top', image: '12_27_dress_up_test1_top2_ver2.png', icon: '12_28_top2_icon.png' },
        // { type: 'top', alt: 'Dress Top', image: '12_27_dress_up_test1_top1_ver2.png', icon: '12_28_top1_icon.png' },
        // { type: 'acc', alt: 'Acc', image: '12_27_dress_up_test1_acc1_ver2.png', icon: '12_28_acc1_icon.png' },
        // { type: 'acc', alt: 'Acc', image: '12_27_dress_up_test1_acc1_ver2.png', icon: '12_28_acc1_icon.png' },
        // { type: 'acc', alt: 'Acc', image: '12_27_dress_up_test1_acc1_ver2.png', icon: '12_28_acc1_icon.png' },
        // { type: 'acc', alt: 'Acc', image: '12_27_dress_up_test1_acc1_ver2.png', icon: '12_28_acc1_icon.png' },
        // { type: 'acc', alt: 'Acc', image: '12_27_dress_up_test1_acc1_ver2.png', icon: '12_28_acc1_icon.png' },
        // { type: 'acc', alt: 'Acc', image: '12_27_dress_up_test1_acc1_ver2.png', icon: '12_28_acc1_icon.png' }
    ]

    const RENDER = Array.from(new Set(WARDROBE.map((item) => {return item.subType})))

    const [wearing, setWearing] = useState(baseWear)
    const [currentType, setType] = useState('bot')
    const [filteredWardrobe, setFilteredWardrobe] = useState(WARDROBE.filter((item) => item.type == 'bot'))

    const dressUp = (item) => {
        let set 
        if (item.subType) {
            set = item.subType
        } else {
            set = item.type
        }

        setWearing((prevState) => {

            if (prevState[set].image == item.image) {
                return ({...prevState, [set]: {}})
            } else {
                if (set == 'dress') {
                    return ({...prevState, [set]: item, 'top': {}, 'bot': {}})
                } else if (set == 'top' || set == 'bot' && prevState.dress.image) {
                    return ({...prevState, [set]: item, 'dress': {}})
                } else {
                    return ({...prevState, [set]: item})
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
        { value: 'bot', alt: 'Bottom Options', icon: 'previews/bot_04prev.png' },
        { value: 'shoe', alt: 'Shoe Options', icon: 'previews/shoe_01prev.png' },
        { value: 'top', alt: 'Top Options', icon: 'previews/top_01prev.png' },
        { value: 'acc', alt: 'Accessory Options', icon: 'previews/acc_01prev.png' },
    ]

    // const TYPES = Array.from(new Set(WARDROBE.map((item) => item.type)))

    const styles = {
        alignment: {
            gridColumnStart: 1,
            gridRowStart: 1,
            maxHeight: '80vh',
            maxWidth: '100vw',
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
                    {Object.keys(baseWear).map((type, index) => {
                        console.log(type)
                        return (
                            <React.Fragment key={index}>
                                <img src={wearing[type].image ? require(`../imgs/${wearing[type].image}`) : null} style={{ ...styles.alignment, zIndex: index + 1 }} />
                            </React.Fragment>
                        )
                    })}
                    {/* <img src={wearing.top.image ? require(`../imgs/${wearing.top.image}`) : null} style={{ ...styles.alignment, zIndex: 2 }} /> */}
                    <img src={model} style={styles.alignment} />
                </Box>
                <Box sx={{ height: '100%', backgroundColor: 'pink', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                    <Box sx={{ backgroundColor: 'purple', display: 'flex', flexDirection: { xs: 'row', md: 'column' }, width: { xs: '100vw', md: '100px' } }}>
                        {TYPES.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <IconButton onClick={() => { changeType(item.value) }}>
                                        <img src={require(`../imgs/${item.icon}`)} style={styles.types} />
                                    </IconButton>
                                </React.Fragment>
                            )
                        })}
                    </Box>
                    <Box sx={{ backgroundColor: 'green', overflowY: {xs: 'hidden', md: 'scroll'}, overflowX: {xs: 'scroll', md: 'hidden'}, display: 'flex', flexDirection: { xs: 'row', md: 'column' }, width: { xs: '100vw', md: '200px' } }}>
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
