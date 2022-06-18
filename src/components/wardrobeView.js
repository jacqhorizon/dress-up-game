import React from 'react';
import TypeSelector from '../components/typeSelector.js'
import boots from '../imgs/12_28_acc1_icon.png'
import shells from '../imgs/12_28_top2_icon.png'
import jeansIcon from '../imgs/12_28_bottom2_icon.png'
import shellsBotIcon from '../imgs/12_28_bottom1_icon.png'
import dressIcon from '../imgs/12_28_top1_icon.png'
import hairIcon from '../imgs/12_28_acc2_icon.png'

const styles = {
    wardView: {
        backgroundColor: '#9ef662',
        width: '500px',
        padding: '10px'
    },
    
    icon: {
        width: '100px'
    },

    button: {
        margin: '10px'
    }

}

const WardrobeView = ({dressUp, wearing, changeType, currentType}) => {

    const WARDROBE_LIST= [
        {type: 'acc', value: 'Boots', icon: boots, view: 1},
        {type: 'acc', value: 'Hair', icon: hairIcon, view: 5},
        {type: 'top', value: 'Shells Top', icon: shells, view: 2},
        {type: 'top', value: 'Dress', icon: dressIcon, view: 6},
        {type: 'bottom', value: 'Jeans', icon: jeansIcon, view: 3},
        {type: 'bottom', value: 'Shells Bottom', icon: shellsBotIcon, view: 4},
    ]

    const ListItem = (item) => {
        return <button onClick={() => {wearing[item.type] == item.view ? dressUp(item.type, 0) : dressUp(item.type, item.view)}} style={styles.button}>
            <img src={item.icon} alt={item.value} style={styles.icon} />
            </button>
    }

    return (
        <>
        
        <div style={styles.wardView}>
            {/* <p>This is the Wardrobe View</p> */}
            <TypeSelector changeType= {changeType} currentType= {currentType} />
            <>
                {WARDROBE_LIST.map((number) => {
                    if (number.type == currentType) {
                        return(<ListItem key={number.value} value={number.value} type={number.type} icon={number.icon} view={number.view} />)
                    } else {
                        return(<></>)
                    }

                }
                )}

            </>
            
        </div>

        </>
    )
}

export default WardrobeView;