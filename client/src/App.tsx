import React from 'react';
import './App.scss';
import { Layout } from './components/Commons/Layouts';
import { Route, Routes } from 'react-router-dom';
import { routes } from './utils/constants/routes';
import { DevicesPage } from './Containers/DevicesPage';
import { SettingsPage } from './Containers/SettingsPage';
import { ContactsPage } from './Containers/ContactsPage';
import { MainPage } from './Containers/MainPage';
import { LoginPage } from './Containers/LoginPage';
import { CheckAuth } from './components/Commons/CheckAuth';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Routes>
          <Route path={routes.MAIN} element={<MainPage />} />
          <Route
            path={routes.DEVICES}
            element={<CheckAuth><DevicesPage /></CheckAuth>}
          />
          <Route
            path={routes.SETTINGS}
            element={<CheckAuth><SettingsPage /></CheckAuth>}
          />
          <Route
            path={routes.CONTACTS}
            element={<CheckAuth><ContactsPage /></CheckAuth>}
          />
          <Route path={routes.AUTH} element={<LoginPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
