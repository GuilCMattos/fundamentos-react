import './ListaProdutos.css'
import React from "react";

import products from "../../data/products";

export default props => { 

    const productsTr = products.map((product, i)=> { 
        return ( 
            <tr key={product.id} className={(i + 1) % 2 === 0 ? 'trPar' : ''}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
            </tr>
        )
    })

    return (
        <div className='Table'>
            <table>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>{productsTr}</tbody>

            </table>
        </div>
    )
}