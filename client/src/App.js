import './sharedStyles/index';

import Dashboard from './containers/dashboard';
import { Store } from './redux/store';
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={Store}>
      <Dashboard />
    </Provider>
  )
}

export default App;
