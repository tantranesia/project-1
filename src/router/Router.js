import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  Navigate,
} from 'react-router-dom';
import Dashboard from '../page/Dashboard';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route key={1} exact={true} path={'/'} element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
