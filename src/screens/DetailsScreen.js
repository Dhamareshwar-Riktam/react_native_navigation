import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DetailsScreen = ({ navigation, route }) => {
    const { msg } = route.params;
    return (
        <View style={styles.container}>
            <Text>{msg}</Text>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});