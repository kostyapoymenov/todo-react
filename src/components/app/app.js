import { Component } from 'react'; 

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployesList from '../employes-list/employes-list';
import EmployesAddForm from '../employes-add-form/employes-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John C.', salary: 100, increase: true, promotion: true, id: 1},
        {name: 'Alex M.', salary: 3000, increase: false, promotion: false, id: 2},
        {name: 'Carl W.', salary: 5000, increase: true, promotion: false, id: 3}
      ]
    }
    this.maxId = 4;

  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
      
    });
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      promotion: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item
      })
    }))
  }

  render() {

    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase === true).length;

    return (
      <div className="app">
          <AppInfo 
            employees={employees}
            increased={increased}/>

          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployesList 
            data={this.state.data} 
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp}
          />
          <EmployesAddForm
            onAdd={this.addItem}
          />
      </div>
    );
  }

}

export default App;
