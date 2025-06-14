import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { Provider } from 'react-redux';
import './App.css';
import Dashboard from './pages/Dashboard';
//@ts-ignore
import store from "./store/configStore";

ModuleRegistry.registerModules([AllCommunityModule]);

function App() {
  return (
    <>
      <Provider store={store}>
          <Dashboard/>
      </Provider>
    </>
  )
}

export default App;