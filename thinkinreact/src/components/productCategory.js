import React from 'react';

class ProductCategory extends React.Component {
    render(){
        const category = this.props.category;
        return(
            <tr>
                <th colSpan='2'className='App__category'>
                    {category}
                </th>
            </tr>
        );
    }
}

export default ProductCategory;