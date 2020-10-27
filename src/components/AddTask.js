import React from 'react';
import './AddTask.css';

class AddTask extends React.Component {
    state = { 
        text: "",
        checked: false,
        date: new Date().toISOString().slice(0, 10) /* data dynamiczna */
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleChecked =(e) => {
        this.setState({
            checked: !this.state.checked
        })
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleClickButton = () => {
        
    }

    render() { 
        const minDate = new Date().toISOString().slice(0, 10); /* początkowa dla kalendarza */
        const tempDate = minDate.split('');
        tempDate[3] = Number(tempDate[3]) + 1;
        const maxDate = tempDate.join('');
        return ( 
            <div className="form">
                <input type="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.handleText}/>
                <input type="checkbox" id="important" checked={this.state.checked} onChange={this.handleChecked}/>
                <label htmlFor="important">priorytet</label>
                <br/>
                <label htmlFor="date">do kiedy zrobić</label>
                <input type="date" id="date" value={this.state.date} min={minDate} max={maxDate} onChange={this.handleDate}/>  {/* format daty */}
                <br/>
                <button onClick={this.handleClickButton}>dodaj</button>
            </div>
         );
    }
}
 
export default AddTask;