import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Open Sidebar"
                onPress={() => navigation.openDrawer()}
            />
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})