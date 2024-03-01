import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface PokemonState {
  data: {
    id: number;
    name: string;
    type: any;
    image: string;
  };
}

const initialState: any = {
  data: {
    id: 0,
    name: '',
    type: [],
    image: ''
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