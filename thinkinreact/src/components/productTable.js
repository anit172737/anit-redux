import React from 'react';
import ProductCategory from './productCategory';
import ProductList from './productList';

class ProductTable extends React.Component {
    render(){
        const rows =[];
        let lastCategory = null;
        const filterText = this.props.filterText;
        const isStocked = this.props.isStocked;

        console.log(lastCategory);


        this.props.products.forEach((product) => {
            if(product.name.indexOf(filterText) === -1){
                return;
            }

            if(isStocked && !product.stocked){
                return;
            }

            if(product.category !== lastCategory){
                rows.push(<ProductCategory category={product.category}/>);
                console.log(lastCategory);
            }
            
            rows.push(
                <ProductList product={product} key={product.name}/>
                
            )
            lastCategory = product.category;
            console.log(lastCategory);
        });

        return(
            <table className='App__table'>
                <thead >
                    <tr className='App__table--head'>
                        <th className='App__table--head-1'>NAME</th>
                        <th className='App__table--head-2'>PRICE</th>
                    </tr>
                </thead>
                <tbody className='App__table--body'>{rows}</tbody>
            </table>
        )
    }
}

export default ProductTable;