
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  };
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=> Response.json())
    .then(users => this.setState({monsters: users}))
  }
  // create class method by using arrow function so we dont have to writing it in return in case we re gonna use it somewhere else
  handleChange = e => {
    this.setState({searchField : e.target.value})
  };

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
        placeholder="Search Monster"
        handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters}/> 
      </div>
    );
  }
}




export default App;
