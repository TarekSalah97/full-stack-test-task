import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SignIn from './pages/SignIn';
// import Welcome from './pages/Welcome';
// import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './pages/Signup';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/signin" element={<SignIn />} />
      <Route
        path="/welcome"
        element={
          <ProtectedRoute>
            <Welcome />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
