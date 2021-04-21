import { Switch, Route, Redirect } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import styled from 'styled-components';

const PageSetup = styled.div`
  width: 80%;
  margin: 0 auto;
  @media ( max-width: 1600px) {
    width: 98%;
  }
`

function App() {
  return (
    <PageSetup>
      <Switch>
        <Route exact path="/">
          <Redirect to="/merch" />
        </Route>
        <Route exact path="/merch" component={Cart}/>
      </Switch>
    </PageSetup>
  );
}

export default App;