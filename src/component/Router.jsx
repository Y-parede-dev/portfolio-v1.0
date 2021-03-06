import './../assets/scss/App.scss';
import React,  { Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import PortFolio from './PortFolio';
import Erreur404 from './Erreur404';
import ProjetPerso from './ProjetPerso';
import Footer from './Footer';
import Mentions from './Mentions';
import Rgpd from './Rgpd';
import FormAbout from './FormAbout';

// const Header = React.lazy(() =>  import('./Header'));
// // const Nav = React.lazy(() =>  import('./Nav'));
// const Main = React.lazy(() =>  import('./Main'));
// const PortFolio = React.lazy(() => import('./PortFolio'));
// const Erreur404 = React.lazy(() => import('./Erreur404'));
// // const Login = React.lazy(() => import('./Login'));
// const ProjetPerso = React.lazy(() => import('./ProjetPerso'));
// // const Footer = React.lazy(() => import('./Footer'));
// const Mentions = React.lazy(() => import('./Mentions'));
// const Rgpd = React.lazy(() => import('./Rgpd'));
// const FormAbout = React.lazy(() => import('./FormAbout'));

const RouterReact=({
        apiUrl, userIsAdm,
        largeur, hauteur, isLoaded, setIsLoaded, footOpen,
        setFootOpen, height}) => {
    return (
        <>
            <Router
                forceRefresh={true} >
                {/* <Login apiUrl={apiUrl} setUserIsCo={setUserIsCo} setUserIsAdm={setUserIsAdm} /> */}
                <Header largeur={largeur} hauteur={hauteur} />
                <Nav largeur={largeur} hauteur={hauteur}/>
                <Suspense fallback={<>CHARGEMENT</>}>
                    <Switch>
                        <Route path="/" exact component={()=><Main ConnectApiUrl={apiUrl} isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>}/>
                        <Route path='/projects' exact component={()=> 
                            <PortFolio userIsAdm={userIsAdm} url={apiUrl} isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>}/>
                        <Route path='/project-perso' exact component={()=> 
                            <ProjetPerso />}/>
                        <Route path='/mentions' exact component={()=><Mentions/>}/>
                        <Route path='/rgpd' exact component={()=><Rgpd/>}/>
                        <Route path='/about' exact component={()=><FormAbout apiUrl={apiUrl} />}/>
                        <Route component={Erreur404}/> 
                    </Switch>
                </Suspense>
                <Footer largeurEcran={largeur} height={height} footOpen={footOpen} setFootOpen={setFootOpen}/>
            </Router>
        </>
    )

}
export default RouterReact;