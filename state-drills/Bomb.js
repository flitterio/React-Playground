import React from 'react';

class Bomb extends React.Component {
    state ={
        count : 0 ,
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            const updateCount = this.state.count + 1
            console.log('tick')
            this.setState({
                count: updateCount
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    } 
    render() {
        if(this.state.count >= 8){
            return (
                <div>BOOM!!!!</div>
            )
        }
        else{
             if(this.state.count % 2){
                    return (
                     <div>tick</div>
                    )}

             else{
                return (
                <div>tock</div>
                     )}
    }

 
}
}
export default Bomb 