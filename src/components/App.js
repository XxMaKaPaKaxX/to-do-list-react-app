import React from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';


class App extends React.Component {
  state = {
    tasks: [
      /* {
        id: 0,
        text: 'zagrać w wiedźmina',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null
      },

      { id: 1, text: "zrobić dobry uczynej", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 2, text: "pomalować dom po sylwestrze", date: '2019-09-11', important: false, active: true, finishDate: null },
      { id: 3, text: "schudnąć 30 kilogramów", date: '2019-05-20', important: true, active: true, finishDate: null },
      { id: 4, text: "sprzedać butelki po piwie (20 skrzynek)", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 5, text: "jeszcze raz pomalować dom", date: '2019-09-11', important: false, active: true, finishDate: null },
      { id: 6, text: "fryzjer!!!", date: '2019-05-20', important: true, active: true, finishDate: null },
      { id: 7, text: "nie odbierać poleconego od komornika", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 8, text: "kupić 2 butelki litrowe", date: '2019-09-11', important: false, active: true, finishDate: null }, */
    ]
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks].filter(task => task.id !== id);
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log('done', id)
    const tasks = [...this.state.tasks].map(task => {
      if (task.id !== id) {
        return task;
      } else {
        task.active = false;
        task.finishDate = new Date().getTime();
        return task;
      }
    });
    this.setState({
      tasks
    })
  }

  toAddTask = (task) => {
    this.setState(prevState => {
      const tasks = [...prevState.tasks];
      tasks.push(task);
      return ({
        tasks
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <AddTask toAddTask={this.toAddTask} /* startIndexForFirstAddedTask={this.state.tasks.length} */ /> {/* przekazać wartość przes propsy */}
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} done={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;


