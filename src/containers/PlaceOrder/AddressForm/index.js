import React, { Component } from 'react';
import NormalInput from '../../../components/UI/NormalInput';

const AddressForm = props =>  {

        const {address} = props;
     
        return (
            <form onSubmit={props.addressSubmitHandler}>
                 <div className="Row">
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="fullName"
                                value={address.fullName}
                                placeholder={'Nome Comleto'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="mobileNumber"
                                value={address.mobileNumber}
                                placeholder={'Celular'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="Row">
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="pinCode"
                                value={address.pinCode}
                                placeholder={'CEP'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="locality"
                                value={address.locality}
                                placeholder={'Número'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                    </div>
    
                    <div className="Row">
                        <NormalInput 
                                name="address"
                                value={address.address}
                                placeholder={'Complemento'}
                                inputHandler={props.inputHandler}
                                type="textarea"
                                style={{height: '60px'}}
                        />
                    </div>
    
                    <div className="Row">
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="cityDistrictTown"
                                value={address.cityDistrictTown}
                                placeholder={'Cidade'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="state"
                                value={address.state}
                                placeholder={'Estado'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                    </div>
    
                    <div className="Row">
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="landmark"
                                value={address.landmark}
                                placeholder={'Ponto de Referência'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="alternatePhoneNumber"
                                value={address.alternateNumber}
                                placeholder={'Telefone Fixo(Opcional)'}
                                inputHandler={props.inputHandler}
                                type="text"

                            />
                        </div>
                    </div>

                    <div className="Row">
                        <button className="DeliveryAddressButton">CONFIRMAR ENDEREÇO</button>
                    </div>

            </form>
           
        );
    
}

export default AddressForm;
