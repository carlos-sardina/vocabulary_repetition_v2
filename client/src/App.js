import './sharedStyles/index';
import { Store } from './redux/store';
import { Provider } from "react-redux";
import Dashboard from "./containers/dashboard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={Store}>
      <Dashboard />
      <ToastContainer
        autoClose={3000}
        position="bottom-right"
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
    </Provider>
  )
}

export default App;
