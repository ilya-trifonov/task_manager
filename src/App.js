import React, { Component } from 'react';
import './App.css';
import Tasks from "./Components/Task";
import AddTask from "./Components/AddTask";
import { Typography } from 'antd';


const { Title } = Typography;


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    id: 1,
                    title: 'Задача 1', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    date: '2020-01-19'
                },
                {
                    id: 2,
                    title: 'Задача 2',
                    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    date: '2020-01-22'
                },
                {
                    id: 3,
                    title: 'Задача 3', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    date: '2020-02-04'
                }
            ],
            showTasks: false,
            visible: false
        };
    }

    deleteTask = (id) => {
        const tasks = this.state.tasks.filter(task => {
            return task.id !== id
        });
        this.setState({
            tasks
        });
    };
    addTask = (task) => {
        task.id = Math.random();
        let tasks = [...this.state.tasks, task];
        this.setState({
            tasks
        })
    };
    onChangeTitle = (title, index) => {
        console.log(title, index);
        let task = this.state.tasks[index];
        task.title = title;
        let tasks = [...this.state.tasks];
        tasks[index] = task;
        this.setState({
            tasks
        });
    };
    onChangeDate = (date, index) => {
        let task = this.state.tasks[index];
        task.date = date;
        let tasks = [...this.state.tasks];
        tasks[index] = task;
        this.setState({
            tasks
        })
    };
    onChangeBody = (body, index) => {
        let task = this.state.tasks[index];
        task.body = body;
        let tasks = [...this.state.tasks];
        tasks[index] = task;
        this.setState({
            tasks
        })
    };

    render() {

        return (
            <div className="App">
                <Title level={2} className="app-header">Менеджер задач</Title>
                <AddTask addTask={this.addTask}/>
                <Tasks
                    tasks={this.state.tasks}
                    deleteTask={this.deleteTask}
                    onChangeTitle={this.onChangeTitle}
                    onChangeDate={this.onChangeDate}
                    onChangeBody={this.onChangeBody}
                />
            </div>
        );
    }
}

export default App;