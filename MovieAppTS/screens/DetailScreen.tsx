import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;

export default function DetailScreen() {
  const route = useRoute<DetailRouteProp>();
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.subtitle}>Ano de Lançamento: {movie.releaseYear}</Text>
      <Text style={styles.text}>ID: {movie.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 6,
  },
  text: {
    fontSize: 16,
  },
});
