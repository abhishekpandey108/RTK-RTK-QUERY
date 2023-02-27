import './App.css';

import PostList from './PostList';
import PostForm from './PostForm';
import {useGetPokemonByNameQuery} from './redux/features/pokemonApi';
function App() {

  const { data, isLoading } = useGetPokemonByNameQuery('bulbasaur');


  console.log('data:',data.moves, 'isLoading:',isLoading)

  return (
    <div className="App">
    <PostForm />
      <PostList />
    
      
    </div>
  );
}

export default App;
