import './App.css';
import './style.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useRef } from 'react';
import Header from './MyComponents/Header';
import States from './MyComponents/States';
import Props from './MyComponents/Props';
import GettingValuesFromInput from './MyComponents/GettingValuesFromInput';
import HideShow from './MyComponents/HideShow';
import FormHandeling from './MyComponents/FormHandeling';

import UseOfConditions from './MyComponents/UseOfConditions';

import GettingWithProps from './MyComponents/GettingWithProps';

import LifecycleClass from './MyComponents/LifecycleClass';

import LifecycleFunctional from "./MyComponents/LifecycleFunctional";
import StyleInReact from './MyComponents/StyleInReact';
import HandelingArrayWithList from './MyComponents/HandelingArrayWithList';
import ReactFragments from './MyComponents/ReactFragments';
import DataChildToParent from './MyComponents/DataChildToParent';
import PureComponent from './MyComponents/PureComponent';
import UseMemo from './MyComponents/UseMemo';
import RefInReact from './MyComponents/RefInReact';
import UseRef from './MyComponents/UseRef';
import ForwardRef from './MyComponents/ForwardRef';
import ControlledComponent from './MyComponents/ControlledComponent';
import UncontrolledComponent from './MyComponents/UncontrolledComponent';
import HighOrderComponent from './MyComponents/HighOrderComponent';
import About from './MyComponents/About';
import Footer from './MyComponents/Footer';
import Contact from './MyComponents/Contact';
import PageNotFound from './MyComponents/404';
import DynamicRouting from './MyComponents/DynamicRouting';
import Users from './MyComponents/Users';
import ApiInReact from './MyComponents/ApiInReact';
import IndividualUsersApi from './MyComponents/IndividualUsersApi';
import TestApi from './MyComponents/TestApi';
import PreviousState from './MyComponents/PreviousState';
import PrevPropsAndPreRef from './MyComponents/PrevPropsAndPreRef';
import CreateContextMain from './MyComponents/CreateContextMain';
import UseOfCustomHook from './MyComponents/UseOfCustomHook';
function App() {
  const myRef = useRef(null);
  function showData(dataFromChild) {
    alert(dataFromChild);
  }
  function myForwardRefFunction() {
    myRef.current.value = "7";
  }
 
  return (
    <div className="App">
      <Router>
        <Header />


        <Switch>
          <Route exact path="/">

            <States />

            <Props studentName={"Shyam"} stuEmail={"a@gmai.com"} />
            <Props studentName={"Hari"} stuEmail={"b@gmai.com"} />
            <Props studentName={"Ram"} stuEmail={"c@gmai.com"} />


            <GettingValuesFromInput />

            <HideShow />

            <FormHandeling />

            <UseOfConditions />

            <GettingWithProps />


            <LifecycleClass name="Riya loves Bibek" />


            <LifecycleFunctional data={17} counter={50} />

            <StyleInReact />
            <HandelingArrayWithList />

            <ReactFragments />
            <DataChildToParent dataToChild={showData} />
            <PureComponent />
            <UseMemo />
            <RefInReact />
            <UseRef />
            <div>
              <ForwardRef ref={myRef} />
              <button onClick={myForwardRefFunction}>ForwardRef Demo</button>
            </div>
            <ControlledComponent />
            <UncontrolledComponent />

            <HighOrderComponent />
            <DynamicRouting />
            <ApiInReact/>
            <TestApi/>
            <PreviousState/>
            <PrevPropsAndPreRef/>
           <CreateContextMain/>
           <UseOfCustomHook/>
          </Route>



          <Route exact path="/about"><About /></Route>
          <Route exact path="/contact"><Contact /></Route>

          <Route exact path="/users/:id/:name"><Users /></Route>
          <Route exact path="/userapi/:id"> <IndividualUsersApi/> </Route>
          <Route path="*"><PageNotFound /></Route>
        </Switch>
        
        <Footer />
      </Router>

    </div>
  );
}

export default App;
