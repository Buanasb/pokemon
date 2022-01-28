import config from './config.json';

export const API = {
  getPokemons: async () => {
    const res = await fetch(`${config.baseURL}/api/v2/pokemon`);
    const json = await res.json();

    return json;
  },
};
