import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../actions/session_actions';

import SessionFormLogin from './login_form_login';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Login',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionFormLogin);
