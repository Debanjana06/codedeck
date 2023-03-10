import './App.css';
// import React, {useEffect, useState, Suspense} from 'react';
import React, {Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import routes from './routes';
// import {useAuthState} from 'react-firebase-hooks/auth';
// import {auth , db} from './firebaseConfig';
import ModalProvider from './Context/ModalContext';
import PlaygroundProvider from './Context/PlayGroundContext';
const SignIn = React.lazy(()=> import("./Pages/SignIn"));
// const SignUp = React.lazy(()=> import("./Pages/SignUp"));
const Page404 = React.lazy(()=> import("./Pages/Page404"));

function App() {
  // const [user] = useAuthState(auth);
  let user="dfd"
  return (
    <Suspense>
     <PlaygroundProvider>
      <ModalProvider>
      <Router>
        <Routes>
          {
            user ? <>
            {
              routes.map((route, index)=>{
                return <Route key={index} path={route.path} element={route.component} />
              })
            }
            </> :
            <>
             <Route path='/' element={<SignIn/>} />
             <Route path='*' element={<SignIn/>} />
             {
              routes.map((route,index)=>{
                return <Route key={index} path={route.path} element={route.privateRoute ? <Page404/> : route.component} />
              })
             }
            </>
          }
        </Routes>
      </Router>
      </ModalProvider>
      </PlaygroundProvider>
    </Suspense>
  );
}

export default App;
