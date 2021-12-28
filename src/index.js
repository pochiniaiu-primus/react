import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js'
// import App from './App';
import reportWebVitals from './reportWebVitals';
class App extends React.Component {
    constructor() {
        super()

        this.state = {
            todos: [
                'first',
                'second',
                'third'
            ]
        }
    }

    addTodo = (todo) => {
        this.setState({
            todos: [
                ...this.state.todos,
                todo
            ]
        })
    }

    render() {
        return <div className="application">
            <Header
                addTodoMethod={this.addTodo}
            />
            <Body
                todosArg={this.state.todos}
            />
        </div>
    }
}

const Body = ({todosArg}) => {
    return <div>
        {todosArg.map((todo, i) => <div key={i}>{todo}</div>)}
    </div>
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
