import { Route } from 'react-router-dom';

import { Home, Movies } from './pages';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/watchmovies" component={Movies} />
    </div>
  );
}

export default App;
