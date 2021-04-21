import { Switch, Route, Redirect } from 'react-router-dom';
import Merch from './Components/Merch/Merch'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/merch" />
      </Route>
      <Route exact path="/merch" component={Merch} />
    </Switch>
  );
}

export default App;

