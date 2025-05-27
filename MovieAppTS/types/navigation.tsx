import { Movie } from "./movies";

export type RootStackParamList = {
  Home: undefined;
  Detail: { movie: Movie };
};