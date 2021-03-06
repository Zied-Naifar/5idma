import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAdmin } from '../../actions/authAdminAction';
import TextFieldGroup from '../common/TextFieldGroup';
class LoginAdmin extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }
  // componentDidMount() {
  //   if (this.props.authAdmin.isTestify) {
  //     this.props.history.push('/dashboardAdmin');
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.authAdmin.isTestify) {
  //     this.props.history.push('/dashboardAdmin');
  //   }

  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }
  // }

  onSubmit = e => {
    e.preventDefault();

    const adminData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginAdmin(adminData);
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { errors } = this.state;
    return this.props.authAdmin.isTestify ? (
      <Redirect to="/dashboardAdmin" />
    ) : (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your admin account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Email address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
LoginAdmin.propTypes = {
  loginAdmin: PropTypes.func.isRequired,
  authAdmin: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  authAdmin: state.authAdmin,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginAdmin }
)(LoginAdmin);
