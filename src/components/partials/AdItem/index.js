import React from 'react';
import { Link } from 'react-router-dom';

import { Item } from "./styles";

export default function AdItem({ data }) {
    const price = data.priceNegotiable ? 'Preço negociável': `R$ ${data.price}`;

    return (
        <Item className="adItem">
            <Link to={`/ads/${data.id}`}>
                <div className="itemImage">
                    <img src={data.image} alt=""/>
                </div>

                <div className="itemName">{data.title}</div>

                <div className="itemPrice">{price}</div>
            </Link>
        </Item>
    )
}