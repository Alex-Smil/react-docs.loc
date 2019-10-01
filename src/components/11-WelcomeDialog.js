import React from 'react';
import './11-WelcomeDialog.css';

function FancyBorder(props) {
    console.log(props.color);
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color='blue'>
            <h1 className='Dialog-title'>Добро пожаловать</h1>
            <p className='Dialog-message'>
                Спасибо, что посетили нашу страничку!</p>
        </FancyBorder>
    );
}


export default WelcomeDialog;