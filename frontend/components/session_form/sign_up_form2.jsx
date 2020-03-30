import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password2: '',
            errors: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }



    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }


    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.signup(user)
            .then(res => {
                if (!res.errors) {
                    this.props.closeModal()
                }
            })
    }




    // renderErrors() {
    //     return (
    //         <ul>
    //            {this.props.errors.map((error,idx) => (
    //                <li key={`error-${idx}`}>
    //                    {error}
    //                </li>
    //            ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <div className="signup-form-container">
                <form className="signup-form" onSubmit={this.handleSubmit}>
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
                    <div className="signup-errors">{this.props.errors.username}</div>
                    <br />
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.update("email")}
                        placeholder="Email"
                    />
                    <div className="signup-errors">{this.props.errors.email}</div>
                    <br />
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        placeholder="Password"
                    />
                    <div className="signup-errors">{this.props.errors.password}</div>
                    <br />
                    <input
                        type="password"
                        value={this.state.password2}
                        onChange={this.update("password2")}
                        placeholder="Confirm Password"
                    />
                    <div className="signup-errors">{this.props.errors.password2}</div>
                    <br />
                    <input
                        className="submit-button-modal"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm2);