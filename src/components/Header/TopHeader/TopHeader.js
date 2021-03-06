import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as authActions from '../../../store/actions/authActions';
import './style.css';

import { connect } from 'react-redux';

class TopHeader extends Component{

    componentDidMount() {
        this.props.getToken();
    }

    render() {
        let guestAccount = <ul className="Dropdown Account">
                                <li><Link to="/signup"><i className="fas fa-user"></i>&nbsp;&nbsp;<span>Cadastre-se</span></Link></li>
                                <li><Link to="/login"><i className="fas fa-user"></i>&nbsp;&nbsp;<span>Login</span></Link></li>
                            </ul>;
        if(this.props.auth.isAuthenticated){
            guestAccount = <ul className="Dropdown Account">
                                <li><Link to="/orders"><i className="far fa-clipboard"></i>&nbsp;&nbsp;<span>Pedidos</span></Link></li>
                                <li><Link to="" onClick={() => this.props.logout()}><i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;<span>Logout</span></Link></li>
                            </ul>;
        }

        return (
            <div className="TopHeader">
                <div>
                    <ul className="TopMenu">
                        <li className="MenuItem">
                            <i className="far fa-user-circle"></i>
                            <Link to="/account">{this.props.auth.isAuthenticated ? this.props.auth.user.firstName: ' Minha Conta'}</Link>
                            {guestAccount}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getToken: () => dispatch(authActions.getToken())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);
