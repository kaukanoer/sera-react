import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';
import './App.css';
import { MainPage } from './page';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store);


const App = ({ token, onAppear }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <MainPage />
      </div>
    </PersistGate>
   </Provider>
);

export default App
