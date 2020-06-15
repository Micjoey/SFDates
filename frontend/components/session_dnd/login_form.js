import React from 'react';
import { withRouter } from 'react-router-dom';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.guestLogin = this.guestLogin.bind(this)
    }

    componentDidMount() {

    }
   
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.login(user).then(res => {
          if (!res.errors) {
            this.props.closeModal();
          }
        });
    }
    guestLogin(e) {
        e.preventDefault();
        const user = {
          username: 'Lord Fitzgerald',
            password: 'password'
        };
        this.props.login(user).then(res => {
          if (!res.errors) {
            this.props.closeModal();
          }
        });
    }


    render() {
        return (
          <div>
            <div className="login-form-container">
              <form className="login-form" onSubmit={this.handleSubmit}>
                <h2 className="modal-header">
                  D <i className="fab fa-d-and-d"></i> M
                </h2>
                <br />
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  placeholder="Username"
                />
                <div className="login-errors">{this.props.errors.username}</div>
                <br />
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
                <div className="login-errors">{this.props.errors.password}</div>
                <br />
                <div className="guest-login-submit-div">
                  <input
                    className="submit-button-modal"
                    type="submit"
                    value="Submit"
                  />
                  <button className='submit-button-modal' onClick={this.guestLogin}> Guest Login</button>
                </div>
              </form>
            </div>
          </div>
        );
          
    }
}

export default withRouter(LoginForm);