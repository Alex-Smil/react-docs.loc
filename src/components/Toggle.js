import React from 'react';

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

export default Toggle