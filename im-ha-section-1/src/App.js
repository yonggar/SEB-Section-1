import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Gallery from './page/Gallery';
import About from './page/About';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ul>
        <li>
          <Link to='/'>Gallery</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <div id='page'>
        {/* TODO: 현재는 Gallery 컴포넌트만 보이지만, URL에 의해 컴포넌트가 다르게 보여야 합니다. */}
        <Switch>
          <Route exact path='/'>
            <Gallery/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
