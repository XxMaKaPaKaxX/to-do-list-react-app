import React from 'react';
import './AddTask.css';

class AddTask extends React.Component {
    state = { 
        text: "",
        checked: false,
        date: new Date().toISOString().slice(0, 10) /* data dynamiczna */
    }

    startIndexForAddedTask = 0;

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
        const newTask = { id: this.startIndexForAddedTask, text: this.state.text, date: this.state.date, important: this.state.checked, active: true, finishDate: null };
        if (this.state.text) {
            this.props.toAddTask(newTask);
            this.startIndexForAddedTask += 1;
            this.setState({ 
                text: "",
                checked: false,
                date: new Date().toISOString().slice(0, 10)
            })
        } else {
            return alert("Wprowadź zadanie do wykonania")
        }                
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