import React from 'react';
import './style.css';
import { connect } from 'react-redux';

const CartPrice = props => {

    return (
        <div className="PriceWrapper">
            {/* show price */}
            <div className="CardTitle">
                <h3>DETALHES DO PEDIDO</h3>
            </div>
            <div className="CardBody">
                <div className="FinalBilling">
                    <div className="Row">
                        <p>Preço ({props.cart.cartCount})</p>
                        <p>R${props.cart.totalAmount}</p>
                    </div>
                    <div className="Row">
                        <p>Frete</p>
                        <p>R$0</p>
                    </div>
                    <hr />
                    <div className="Row">
                        <h4>Valor Total:</h4>
                        <h4>${props.cart.totalAmount}</h4>
                    </div>
                </div>
                
            </div>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartPrice);
