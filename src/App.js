import React from 'react';
import './App.scss';
import Benefits from './components/Benefits';
import Reviews from './components/Reviews';
import Intro from './components/Intro';
import Nav from './components/Nav';
import Prices from './components/Prices';
import ProgramPlan from './components/ProgramPlan';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreditInfo from './components/CreditInfo';
import Test from './components/Test';
import  { CSSTransition, TransitionGroup } from 'react-transition-group';



function App() {
  return (
    <Router>
      <div className="App">
      <Route render={({location}) => (
               <TransitionGroup component={null}>
               <CSSTransition
                 key={location.key}
                 timeout={200}
                 classNames="fade"
                 >
                 <Switch>
                   <Route exact path="/">
                     <Nav />
                     <Intro />
                     <Benefits /> 
                     <Reviews />
                     <ProgramPlan />
                     <Prices />
                   </Route>
                   <Route path="/pay" component={CreditInfo} />
                   <Route path="/test" component={Test} />
                 </Switch>
               </CSSTransition>
             </TransitionGroup> 
      )} />
      </div> 
    </Router>
  );
}

export default App;