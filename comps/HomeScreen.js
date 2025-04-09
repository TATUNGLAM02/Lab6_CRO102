import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🎯 Chọn Bài Tập</Text>

            <Button 
                title="🔍 Bài 2: Tìm Pokémon" 
                onPress={() => navigation.navigate('Bai2')} 
                color="#ff5722"
            />

            <Button 
                title="📝 Bài 3: Đăng Ký" 
                onPress={() => navigation.navigate('Bai3')} 
                color="#3f51b5"
                marginTop="20"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        marginTop: 20
    },
   
});

export default HomeScreen;
