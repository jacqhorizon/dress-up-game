import React from 'react';
import { Button } from '@mui/material';

const TypeSelector = ({changeType, currentType}) => {
    const styles = {
        typeHolder: {
            display: 'flex',
            displayDirection: 'row',
            listStyleType: 'none',
            margin: '0px'
        }
    }

    return (
        <>
        <ul style={styles.typeHolder}>
            <li><Button onClick={()=> {changeType('top')}}>Tops</Button></li>
            <li><Button onClick={()=> {changeType('bottom')}}>Bottoms</Button></li>
            <li><Button onClick={()=> {changeType('acc')}}>Accessories</Button></li>
        </ul>
        </>
    )
}

export default TypeSelector
