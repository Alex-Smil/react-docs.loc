import React from 'react';


class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            value: 'Напишите ваш текст сюда'
        });

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div style={{
                border: '1px solid #ccc', 
                padding: '20px',}}
            >
                <form onSubmit={this.handleSubmit}>
                    <h2>Поле для текста</h2>
                    <label>
                        Текст:
                        <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                    </label>
                    <input type="submit" value='Push'/>
                </form>
            </div>
        );
    }
}

export default EssayForm;