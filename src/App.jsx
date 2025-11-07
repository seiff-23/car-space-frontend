import React, { Suspense, lazy, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Loading from './components/Loading';
import ScrollToTop from './components/ScrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import SuccessNotif from './components/SuccessNotif';
import ErrorNotif from './components/ErrorNotif';
import { currentUser } from './JS/Actions/authActions';
import Settings from './pages/Settings';

const NavBar = lazy(()=> import('./components/NavBar')) 
const Home = lazy(()=> import('./pages/Home')) 
const Marketplace  = lazy(()=> import('./pages/Marketplace')) 
const Contact  = lazy(()=> import('./pages/Contact')) 
const Login  = lazy(()=> import('./pages/Login')) 
const Register  = lazy(()=> import('./pages/Register')) 
const Profile  = lazy(()=> import('./pages/Profile')) 
const ErrorPage  = lazy(()=> import('./pages/ErrorPage')) 
const Footer  = lazy(()=> import('./components/Footer')) 
const CarDescription = lazy(() => import("./components/CarDescription")); 

const App = () => {

  const dispatch = useDispatch()

    const carSuccess = useSelector((state) => state.CarReducer.success);
    const carErrors = useSelector((state) => state.CarReducer.errors);

    const authSuccess = useSelector((state) => state.AuthReducer.success);
    const authErrors = useSelector((state) => state.AuthReducer.errors);


    const isAuth = useSelector((state) => state.AuthReducer.isAuth);


      useEffect(() => {
        if (localStorage.getItem("token")) {
          dispatch(currentUser());
        }
      }, [dispatch]);
  return (
    <>
      <NavBar />
      <ScrollToTop />

      {carSuccess &&
        carSuccess.map((success) => (
          <SuccessNotif key={success.id} success={success} />
        ))}
      {carErrors &&
        carErrors.map((error) => <ErrorNotif key={error.id} error={error} />)}


      {authSuccess &&
        authSuccess.map((success) => (
          <SuccessNotif key={success.id} success={success} />
        ))}
      {authErrors &&
        authErrors.map((error) => <ErrorNotif key={error.id} error={error} />)}

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/contact" element={<Contact />} />
          { !isAuth && <Route path="/login" element={<Login />} />}
          { !isAuth &&  <Route path="/register" element={<Register />} />}
          { isAuth && <Route path="/profile" element={<Profile />} />}
          { isAuth && <Route path="/settings" element={<Settings />} />}
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/car_description/:id" element={<CarDescription />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App