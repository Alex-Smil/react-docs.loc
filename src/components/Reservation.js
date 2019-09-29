import React from 'react';

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        // внутри setState() передаем вычисляемое св-во объекта 
        this.setState({
            [name]: value
        });

    }

    render() {
        return(
            <div style={{
                border: '1px solid #ccc', 
                padding: '20px',}}
            >
                <form>
                    <label>
                        Пойду:
                        <input 
                            name='isGoing'
                            type="checkbox"
                            checked={this.state.isGoing}
                            onChange={this.handleInputChange}/>
                    </label>
                    <br/>
                    <label>
                        Кол-во гостей:
                        <input 
                            name='numberOfGuests'
                            type="number"
                            value={this.state.numberOfGuests}
                            onChange={this.handleInputChange}/>
                    </label>
                </form>
            </div>
        );
    }
}

export default Reservation;