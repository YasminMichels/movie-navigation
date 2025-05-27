import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Movie } from '../types/movies';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigation = useNavigation<HomeScreenProp>();

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.movies.slice(0, 9)); // Pega os 9 primeiros
      })
      .catch((error) => console.error('Erro ao buscar filmes:', error));
  }, []);

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Detail', { movie: item })}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>Ano: {item.releaseYear}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});
