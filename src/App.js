import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';
import './App.css';
import { 
  LoginPage, MainPage, RegisterPage, SplashPage,
  AddEditBlogPage,
 } from './page';
import {
  ROUTE_NAME_LOGIN, ROUTE_NAME_MAIN_PAGE, ROUTE_NAME_REGISTER,
  ROUTE_NAME_ADD_EDIT,
} from './constant';
import { PrivateRoute } from './component';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store);

const App = () => {
  const getElement = (element) => {
    return <PrivateRoute element={element} />
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SplashPage />}>
            <Route path={ROUTE_NAME_LOGIN} element={<LoginPage />} />
            <Route path={ROUTE_NAME_REGISTER} element={<RegisterPage />} />
            {/* Pages below have to use token to access */}
            <Route path={ROUTE_NAME_MAIN_PAGE} element={getElement(MainPage)} />
            <Route path={ROUTE_NAME_ADD_EDIT} element={getElement(AddEditBlogPage)} />
            </Route>
          </Routes>
        </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App