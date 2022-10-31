import { Linking, Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState('');

    const handleOpenURL = ({ url }) => {
        setData(url);
    };

    useEffect(() => {
        // Your code here
        Linking.addEventListener('url', handleOpenURL);
    }, []);

    return (
        <View style={styles.container}>
            <IonIcon name='list' size={28} color='#f4511e' />
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('DetailsScreen', {
                    msg: 'H!, I am a param from HomeScreen'
                })}
            />
            <Text>{data && data}</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }
});