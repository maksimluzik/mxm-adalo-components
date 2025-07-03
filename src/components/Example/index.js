import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const Example = (props) => {
    const { color, text, buttonTitle, onButtonPress } = props

    return (
        <View style={styles.wrapper}>
            <Text style={{ color }}>{text}</Text>
            <Button title={buttonTitle} onPress={onButtonPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
})

export default Example
