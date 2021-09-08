// create your App component here
import React, {Component} from "react";

class App extends Component{

    state = {
        peopleInSpace: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => this.setState({
            peopleInSpace: data.people
        }, ()=> console.log(this.state.peopleInSpace)))
    }

    render(){
        return(
            <div>
                {this.state.peopleInSpace.map((person, idx) => <div key={idx}>{person.name}</div>)}
            </div>
        )
    }
}

export default App