import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SetupRouter from './routes/SetupRouter';
import { store, persistor } from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SetupRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
