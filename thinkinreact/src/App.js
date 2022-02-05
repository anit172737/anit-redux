
import React from 'react';
import './scss/App.scss';
import SearchBox from './components/searchbox';
import ProductTable from './components/productTable';

class  App extends React.Component {
state = {
  filterText : '',
  isStocked : false,
}

handleStocked = (stock)=>{
  this.setState({isStocked : stock});
}

handleText = (text) => {
  this.setState({filterText:text});
}
  render() {
    return (
    <div className="App">
      <div className='App__sec'>
      <SearchBox handlefilterText={this.handleText} 
      handleCheck={this.handleStocked} 
      filterText ={this.state.filterText}
      isStocked={this.state.isStocked} />

      <ProductTable filterText ={this.state.filterText} 
      isStocked = {this.state.isStocked}
      products={products} />
    </div>
    </div>
  );}
}

const products = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export default App;
