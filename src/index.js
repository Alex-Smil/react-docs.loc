import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
// import { format } from 'path';
// import { userInfo } from 'os';

// ReactDOM.render(<App />, document.getElementById('root'));

// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world !!!</h1>
//             <h2>It is: {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );

//     ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);
// *************************************************************

// function Welcome(props) {
//     return (
//         <h2>Привет, {props.name}</h2>
//     );
// }

// function App() {
//     return (
//         <Comment />
//     );
// }

// function Comment(props) {
//     return (
//         <div className='Comment'>
//             <UserInfo user={props.author} />
//             <div className='Comment-text'>
//                 {props.text}
//             </div>
//             <div className='Comment-date'>
//                 {/* {formatDate(props.date)} */}
//             </div>
//         </div>
//     );
// }

// function Avatar(props) {
//     return (
//         <img className='Avatar'
//             src={props.user.avatarUrl}
//             alt={props.user.name}
//         />
//     );
// }

// function UserInfo(props) {
//     return (
//         <div className='UserInfo'>
//             <Avatar user={props.user} />
//             <div className='UserInfo-name'>
//                 {props.user.name}
//             </div>
//         </div>
//     );
// }

// ReactDOM.render(<App/>, document.getElementById('root'));
// *********************************************************

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
        this.timerID = null;
    }

    // *** Методы жизненного цикла (lifecycle methods) ***
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    // ***********

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        return (
            <div>
                <h2>Hello, world !!!</h2>
                {/* <h3>Сейчас: {this.state.date.toLocaleTimeString()}</h3> */}
                <FormattedDate date={this.state.date}/>
            </div>
        );
    }
}

// ***************************************

function FormattedDate(props) {
    return (
        <h2>Сейчас: {props.date.toLocaleTimeString()}</h2>
    );
}



// ******************************************

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                <h3>Component Toggle</h3>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'Включено' : 'Выключенно'}
                </button>
            </div>
        );
    }
}

function UserGreeting() {
    return (
        <h1>С возвращением!</h1>
    );
}

function GuestsGreeting() {
    return (
        <h1>Войдите, пожлуйста.</h1>
    );
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestsGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Войти
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Выйти
        </button>
    );
}


class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        };
    }

    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }

    
}

// *************************************

function App() {
    return (
        <div>
            <Clock />
            <Toggle />
            <Greeting isLoggedIn={true} />  
            <LoginControl />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);














// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
