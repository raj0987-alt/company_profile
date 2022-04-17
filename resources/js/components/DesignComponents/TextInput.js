import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Col, Row} from "react-bootstrap";

const TextInput = props =>(
    <div className={`form-group ${props.inputTypeTextClassName}`}>
        <Row>
            <Col sm={props.labelCol}>
                <label htmlFor={props.name}>{props.label}</label>
            </Col>
            <Col sm={props.inputCol}>
                <input
                    className={props.error ? 'form-control is-invalid' : 'form-control'}
                    type={props.type}
                    name={props.name}
                    id={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}/>
                {props.error && <div className="invalid-feedback">{props.error}</div>}
            </Col>
        </Row>



    </div>
)

TextInput.PropTypes ={
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.string,
    //inputTypeTextClassName:PropTypes.string,
}

TextInput.defaultProps={
    type:'text',
    label:'',
    placeholder: '',
    inputTypeTextClassName:'',
}

export default TextInput;
