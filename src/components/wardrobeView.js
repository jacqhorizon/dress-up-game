import React from 'react';
import boots from '../imgs/12_28_acc1_icon.png'
import shells from '../imgs/12_28_top2_icon.png'

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

const WardrobeView = ({dressUp}) => {

    const WARDROBE_LIST= [
        {type: 'top', value: 'Boots', icon: boots, view: 1},
        {type: 'top', value: 'Shells', icon: shells, view: 2}
    ]

    const ListItem = (item) => {
        return <button onClick={() => {dressUp(item.type, item.value, item.view)}} style={styles.button}>
            <img src={item.icon} alt={item.value} style={styles.icon} />
            {/* {props.value} */}
            </button>
    }

    return (
        <>
        
        <div style={styles.wardView}>
            {/* <p>This is the Wardrobe View</p> */}

            <>
                {WARDROBE_LIST.map((number) =>
                <ListItem key={number.value} value={number.value} type={number.type} icon={number.icon} view={number.view} />
                )}

            </>
            
        </div>

        </>
    )
}

export default WardrobeView;