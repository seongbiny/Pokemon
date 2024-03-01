import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonState {
  data: {
    id: string;
    name: string;
    types: string[];
    image: string;
    koreanName: string;
    height: string;
    weight: string;
    abilities: string[]
  };
}

const initialState: PokemonState = {
  data: {
    id: '',
    name: '',
    types: [],
    image: '',
    koreanName: '',
    height: '',
    weight: '',
    abilities: []
  },
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonData: (state: PokemonState, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
   
  },
});

export const { setPokemonData } = pokemonSlice.actions;

export default pokemonSlice.reducer;