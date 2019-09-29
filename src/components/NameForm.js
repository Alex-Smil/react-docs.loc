import React from 'react';


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value.toUpperCase()
        });
    }

    handleSubmit(event) {
        console.log('Отправленное имя: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div style={{
                border: '1px solid #ccc', 
                padding: '20px'
            }}>
                <h2>Форма для отправки письма</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Имя:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value='Отправить'/>
                </form>
            </div>
        );
    }
}

export default NameForm;