import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native';

const SettingsScreen = () => {
    useFocusEffect(() => {
        alert('ProfileScreen is focused');
        return () => {
            alert('ProfileScreen is Blurred');
        }
    });

    return (
        <View style={styles.container}>
            <Text>SettingsScreen</Text>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})