import React from 'react';

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

function UserGreeting() {
    return (
        <h1>С возвращением!</h1>
    );
}

function GuestsGreeting() {
    return (
        <h1>Войдите, пожалуйста.</h1>
    );
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestsGreeting />;
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



export default LoginControl;