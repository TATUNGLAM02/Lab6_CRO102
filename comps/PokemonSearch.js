import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet } from 'react-native';
import { useLazyGetPokemonByNameQuery } from './pokemonApi';

const PokemonSearch = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [fetchPokemon, { data, error, isLoading }] = useLazyGetPokemonByNameQuery();

    return (
        <View style={styles.container}>
            <TextInput
                value={pokemonName}
                onChangeText={setPokemonName}
                placeholder="Nhập tên Pokémon"
                style={styles.input}
            />
            <Button title="Tìm kiếm" onPress={() => fetchPokemon(pokemonName)} />

            {isLoading && <Text>Loading...</Text>}
            {error && <Text style={styles.error}>Lỗi! Không tìm thấy Pokémon.</Text>}
            
            {data && (
                <View style={styles.result}>
                    <Text style={styles.title}>{data.name}</Text>
                    <Image source={{ uri: data.sprites.front_default }} style={styles.image} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        marginTop: 40
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        width: '80%',
        marginBottom: 10,
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
    result: {
        marginTop: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 10,
    },
});

export default PokemonSearch;
