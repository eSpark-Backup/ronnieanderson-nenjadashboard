import { Route, Switch } from 'react-router-dom';
import { SignIn, Signup } from './pages';

function App() {
  return (
   <Switch>
      <Route path="/sign-up" component={Signup} />
      <Route path="/sign-in" component={SignIn} />
   </Switch>
  );
}

export default App;
