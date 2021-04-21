import { Switch, Route, Redirect } from 'react-router-dom';
import Merch from './Components/Merch/Merch';
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
        <Route exact path="/merch" component={Merch} />
      </Switch>
    </PageSetup>
  );
}

export default App;