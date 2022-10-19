import React from 'react'

const CharacterView = () => {
    return (
        <>
            <Box style={{ backgroundColor: 'orange', display: 'grid', gridTemplateColumns: '100%', gridTemplateRows: '100%' }}>
                <img src={require(`../imgs/${WARDROBE[0].image}`)} style={{ ...styles.alignment, zIndex: 2 }} />
                <img src={model} style={styles.alignment} />
            </Box>
        </>
    )
}

export default CharacterView
