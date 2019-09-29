import React from 'react';
import './App.css';

// my components
// import Clock from './components/Clock';
// import Toggle from './components/Toggle';
// import Greeting from './components/Greeting';
// import Greeting from './components/LoginControl';
// import LoginControl from './components/LoginControl';
import NameForm from './components/NameForm';
import EssayForm from './components/EssayForm';
import FlavorForm from './components/FlavorForm'
import Reservation from './components/Reservation'

function App() {
  return (
      <div style={{
        textAlign: 'center'
      }}>
          {/* <Clock /> */}
          {/* <Toggle /> */}
          {/* <Greeting isLoggedIn={true} />   */}
          {/* <LoginControl /> */}
          <NameForm />
          <EssayForm />
          <FlavorForm />
          <Reservation />
      </div>
  );
}

export default App;
