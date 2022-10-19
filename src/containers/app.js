import React from 'react';
import DressUpContainer from './dressupContainer';
import { Container } from '@mui/material';

const styles = {
    // page: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     width: '100vw'
    // }
}

const AppContainer = () => {

    return (
        <>
        {/* <div style={styles.page}> */}
        <Container style={{backgroundColor: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', bottom: '0px', top: '0px'}}>
            <DressUpContainer />
        </Container>
        {/* </div> */}
        </>
    )
}

export default AppContainer;
