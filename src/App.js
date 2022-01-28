import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { PokemonListScreen } from './screen/PokemonListScreen';
import { PokemonDetailScreen } from './screen/PokemonDetailScreen';

const App = () => {
  return (
    <Router>
      <Route path='/pokemon' component={PokemonListScreen} exact></Route>
      {/* <Route path='/details-card/' component={PokemonDetailScreen}></Route> */}
    </Router>
  );
};
export default App;
