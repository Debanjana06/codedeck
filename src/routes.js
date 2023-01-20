import React from 'react'

const Home = React.lazy(()=> import("./Pages/Home"))
const PlayGround = React.lazy(()=> import("./Pages/PlayGround"))
const Page404 = React.lazy(()=> import("./Pages/Page404"))
const SignIn = React.lazy(()=> import("./Pages/SignIn"))
const SignUp = React.lazy(()=> import("./Pages/SignUp"))

const routes = [
    {
        path: "/",
        component: <Home/>,
        private:true
    },
    {
        path: "/playground/:folderId/:playgroundId",
        component: <PlayGround/>,
        private:true
    },
    {
        path: "*",
        component: <Page404/>,
        private:true
    },
    {
        path: "/signin",
        component: <SignIn/>,
        private:true
    },
    {
        path: "/signup",
        component: <SignUp/>,
        private:true
    }
]
export default routes