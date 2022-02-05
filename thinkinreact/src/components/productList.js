
import React from 'react';

class ProductList extends React.Component{
    render(){
        const product = this.props.product;
        return(
            
            <tr >
                <td className='App__list'>
                    {product.stocked? product.name:
                    <span style={{backgroundColor:'red', padding:'.1rem .5rem .3rem .5rem', borderRadius:'5px'}}>{product.name} is out of stock</span>
                    }
                </td>
                <td className='App__list'>{product.price}</td>
            </tr>
        )
    }
}

export default ProductList;
