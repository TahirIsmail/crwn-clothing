import React from 'react';
import SHOP_DATA from'./shop.data';
class ShopPage extends React.Component{
    constructor() {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };

        
    }
    render() {
        return (
            <h1>SHOP PAGE</h1>
        );
    }
}
export default ShopPage;