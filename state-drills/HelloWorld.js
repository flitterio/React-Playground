import React from 'react';

class HelloWorld extends React.Component {
    state ={
        who: 'World!'
    };
    world = () => {
        const greeting = 'World!'
        this.setState({
            who : greeting
        })
        }
        friend = () => {
            const greeting = 'Friend!'
            this.setState({
                who : greeting
            })
            }
        react = () => {
            const greeting = 'React!'
            this.setState({
                 who : greeting
                })
                }
    render(){
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button 
            onClick={this.world}>
            World!
          </button>
          <button 
            onClick={this.friend}>
            Friend!
          </button>
          <button 
            onClick={this.react}>
            React!
          </button>
            </div>
        );
    }
}

export default HelloWorld