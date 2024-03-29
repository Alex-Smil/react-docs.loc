import React from 'react';
import './App.css';

// my components
// import Clock from './components/Clock';
// import Toggle from './components/Toggle';
// import Greeting from './components/Greeting';
// import Greeting from './components/LoginControl';
// import LoginControl from './components/LoginControl';
// import NameForm from './components/NameForm';
// import EssayForm from './components/EssayForm';
// import FlavorForm from './components/FlavorForm';
// import Reservation from './components/Reservation';
import Calculater from './components/BoilingCalculater';
import WelcomeDialog from './components/11-WelcomeDialog.js';


function App() {
  return (
      <div style={{
        textAlign: 'center',
        maxWidth: '70%',
        margin: '30px auto 30px'
      }}>
          {/* <Clock /> */}
          {/* <Toggle /> */}
          {/* <Greeting isLoggedIn={true} />   */}
          {/* <LoginControl /> */}
          {/* <NameForm /> */}
          {/* <EssayForm /> */}
          {/* <FlavorForm /> */}
          {/* <Reservation /> */}
          <Calculater />
          <WelcomeDialog />
      </div>
  );
}

export default App;
