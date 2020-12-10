import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import './style.css';

class ThankYou extends Component{

    render() {

        const queryParams = this.props.location.search.split("?")[1];
        const orderId = queryParams.split("=")[1];

        return (
            <div>
                <Header />
                <div className="Content">
                    <div className="ThankyouPage">
                       <h1>Agradecemos a preferência!</h1>
                       <p className="OrderId">ID do pedido: {orderId.toLocaleUpperCase()}</p>
                       //!Colocar email do usuário na mensagem da linha 21
                       <p className="SmallText">Você receberá um email de confirmação!</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default ThankYou;
