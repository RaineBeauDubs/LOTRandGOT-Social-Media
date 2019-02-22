import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: []
    };
  }

  componentDidMount = () => {
    axios
      .get('https://node-blog-raine.herokuapp.com/api/users')
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(error => {
        console.log(error);
      })
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Lord of the Rings/Game of Thrones Social Media page!</h1>
      </div>
    );
  }
}

export default App;