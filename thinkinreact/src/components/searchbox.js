
import React from 'react';

class SearchBox extends React.Component {

    tofilterText =(e)=>{
        this.props.handlefilterText(e.target.value)
    }

    toCheck =(e)=>{
        this.props.handleCheck(e.target.checked);
    }

    render(){
        const filterText = this.props.filterText;
        const isStocked = this.props.isStocked;
        return(
            <form className='searchbar__form'>
                <input className='searchbar'
                placeholder='search...' 
                type='text' 
                value={filterText} 
                onChange={this.tofilterText} />
                <br></br>
                <input className='searchbar__check'
                type='checkbox' 
                onChange={this.toCheck} 
                checked={isStocked} /><span className='searchbar__check'>only show products in stock</span>
            </form>
            
        )
    }
}

export default SearchBox;