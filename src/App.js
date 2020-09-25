import React, {Component} from 'react';
//import Split from './composition/Split';
import './App.css';
//import Tooltip from './composition/Tooltip';
import Messages from './Messages';


class App extends Component {
handleButtonClick() {
  console.log('clicked!')
}
render() {
  return (
    <div>
      <p>The current count: {this.state.count}</p>
      <button onClick={this.handleButtonClick}>
        Add 1
      </button>
    </div>
  );
}
}

/*class App extends Component {
  render() {
    
    return (
      <div className="App">
        <h1>Message Application</h1>
        <Messages name = "Messages" unread={0} />
        <Messages name = "Notifications" unread={10} />
      </div>
    );
  }
} 

/*class TheDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { datetime: new Date() };
    console.log('constructor')
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.interval = setInterval(() => {
      console.log('setInterval')
      this.setState({
        datetime: new Date()
      }) 
    }, 1000)
  }
  componentWillMount() {
    clearInterval(this.interval)
  }
  render (){
    console.log('render')
    return (
    <div>{this.state.datetime.toLocaleString()}</div>
    )
  }
}

/*
const firstTooltip =(
  <Tooltip color='hotpink' message='tooltip message'>
    ipsum
  </Tooltip>
)

const secondTooltip =(
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)
function App() {
  return (
    <main className='App'>
     <Split className='left' flexBasis={2}>
     This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        { make another tooltip directly inside the App }
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
         Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
  );
} */

export default App;
//export default TheDate;
