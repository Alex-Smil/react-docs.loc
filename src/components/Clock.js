import React from 'react';

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
                <h3>What time is it ?</h3>
                {/* <h3>Сейчас: {this.state.date.toLocaleTimeString()}</h3> */}
                <FormattedDate date={this.state.date}/>
            </div>
        );
    }
}

function FormattedDate(props) {
    return (
        <p>Сейчас: {props.date.toLocaleTimeString()}</p>
    );
}

export default Clock