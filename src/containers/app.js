import React from 'react';
import DressUpContainer from './dressupContainer';

const styles = {
    page: {
        display: 'flex',
        justifyContent: 'center',
        width: '100vw'
    }
}

const AppContainer = () => {

    return (
        <>
        <div style={styles.page}>
        <DressUpContainer />
        </div>
        </>
    )
}

export default AppContainer;
