import React from 'react';


class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'coconut'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        alert('Ваш любимый вкус: ' + this.state.value);
        event.preventDefault();
    }

    // event.target.children - не работает

    render() {
        return (
            <div style={{
                border: '1px solid #ccc', 
                padding: '20px',}}
            >
                <h2>Выбери любимый вкус</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        casc:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">Грейпфрут</option>
                            <option value="lime">Лайм</option>
                            <option value="coconut">Кокос</option>
                            <option value="mango">Манго</option>
                        </select>
                    </label>
                    <input type="submit" value='send'/>
                </form>
            </div>
        );
    }
}

export default FlavorForm;