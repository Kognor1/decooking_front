import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Pretty-Header.css'
import '../css/Pretty-Registration-Form.css'
import '../css/styles.css'
import {Button} from "react-bootstrap"
class RegisterForm extends Component {
    render() {
        return (
            <div className={"row register-form"}>
                <div className={"col-md-8 offset-md-2 offset-lg-2"}>
                    <form className={"custom-form"}>
                        <div className={"form-row"}>
                            <div className={"col-lg-11 offset-lg-1"}>
                                <h1>Регистрация</h1>
                            </div>
                        </div>
                        <div className={"form-row form-group"}>
                            <div className="col-sm-4 col-lg-3 label-column">
                                <label className="col-form-label" for="name-input-field"></label>
                            </div>
                            <div className="col-sm-6 col-lg-7 offset-lg-0 input-column">
                                <input required placeholder={"Nick Name"} className="form-control" type="text"></input>
                            </div>
                        </div>
                        <div className="form-row form-group">
                            <div className="col-sm-4 col-lg-3 label-column">
                                <label className="col-form-label" for="email-input-field"></label>
                            </div>
                            <div className="col-sm-6 col-lg-7 offset-lg-0 input-column">
                                <input required placeholder={"Email"} className="form-control"type="email"></input>
                            </div>
                        </div>
                        <div className="form-row form-group">
                            <div className="col-sm-4 col-lg-3 label-column">
                                <label className="col-form-label"htmlFor="pawssword-input-field"></label>
                            </div>
                            <div className="col-sm-6 col-lg-7 input-column">
                                <input  required placeholder={"Password"} className="form-control" type="password"></input>
                            </div>
                        </div>
                        <div className="form-row form-group">
                            <div className="col-lg-12 offset-lg-0">
                                <Button id={"reg"} className="btn btn-light btn-lg submit-button" type="button">Зарегестрироваться
                                </Button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
    );
    }
    }

    export default RegisterForm;