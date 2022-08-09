import { Component } from 'react';
import Cardlist from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      entities: [],
      searchField: ''
    };

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((info) => info.json())
      .then((names) => this.setState( () => {
        return {entities: names}
      },
      () => {
        console.log(this.state);
      }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState ( () => {
      return { searchField }
    })
  }
  
  render() {
    //casting to variables
    const {entities, searchField} = this.state
    const { onSearchChange } = this
    
    const filteredEntities = entities.filter((entity)=>{
      return entity.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className="App">

        <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search for entities'
        className='search-box'/>

        <Cardlist entities={filteredEntities} />
        
      </div>
    );
  }
}

export default App;
