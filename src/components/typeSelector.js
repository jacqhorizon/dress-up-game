import React from 'react';

const TypeSelector = ({changeType, currentType}) => {
    const styles = {
        typeHolder: {
            display: 'flex',
            displayDirection: 'row',
            listStyleType: 'none'
        }
    }

    return (
        <>
        <ul style={styles.typeHolder}>
            <li><button onClick={()=> {changeType('top')}}>Tops</button></li>
            <li><button onClick={()=> {changeType('bottom')}}>Bottoms</button></li>
            <li><button onClick={()=> {changeType('acc')}}>Accessories</button></li>
        </ul>
        </>
    )
}

export default TypeSelector
