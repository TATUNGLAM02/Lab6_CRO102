import React from 'react';
import { Provider } from 'react-redux';
import { store } from './comps/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './comps/HomeScreen';
import PokemonSearch from './comps/PokemonSearch';
import SignupForm from './bai3/SignupForm';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icon

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    {/* Màn hình chính */}
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

                    {/* Màn hình Bài 2 */}
                    <Stack.Screen 
                        name="Bai2" 
                        component={PokemonSearch} 
                        options={({ navigation }) => ({
                            title: "🔍 Tìm Pokémon",
                            headerLeft: () => (
                                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                                    <Icon name="arrow-back" size={24} color="#fff" />
                                </TouchableOpacity>
                            ),
                            headerStyle: { backgroundColor: '#ff5722' },
                            headerTintColor: '#fff',
                        })}
                    />

                    {/* Màn hình Bài 3 */}
                    <Stack.Screen 
                        name="Bai3" 
                        component={SignupForm} 
                        options={({ navigation }) => ({
                            title: "📝 Đăng Ký",
                            headerLeft: () => (
                                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                                    <Icon name="arrow-back" size={24} color="#fff" />
                                </TouchableOpacity>
                            ),
                            headerStyle: { backgroundColor: '#3f51b5' },
                            headerTintColor: '#fff',
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

const styles = StyleSheet.create({
    backButton: {
        marginLeft: 15,
   
    },
});

export default App;
