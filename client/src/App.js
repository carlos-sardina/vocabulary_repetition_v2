import './sharedStyles/index';
import { Store } from './redux/store';
import { Provider } from "react-redux";
import Container from "./containers/containers"

function App() {
  return (
    <Provider store={Store}>
      <Container />
    </Provider>
  )
}

export default App;
