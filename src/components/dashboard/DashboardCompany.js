import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCurrentProfileCompany,
  deleteCompanyAccount
} from '../../actions/profileCompanyAction';
import Spinner from '../common/Spinner';
import ProfileCompanyActions from './ProfileCompanyAction';
import ProfileCompany from '../profile-company/ProfileCompany';

//import Offre from './Offre';
class DashboardCompany extends Component {
  componentWillMount() {
    this.props.getCurrentProfileCompany(this.props.authCompany.company.id);
  }
  onDeleteClick = e => {
    this.props.deleteCompanyAccount();
  };
  render() {
    const { company } = this.props.authCompany;
    const { profileCompany, loading } = this.props.profileCompany;

    let dashboardCompanyContent;

    if (profileCompany === null || loading) {
      dashboardCompanyContent = <Spinner />;
    } else {
      //   Check if logged in user has profile data
      if (Object.keys(profileCompany).length > 0) {
        dashboardCompanyContent = (
          <div>
            <p className="lead text-muted">
              {`Welcome ${company.name.toUpperCase()}`}
            </p>
            <ProfileCompanyActions />
            <ProfileCompany />
            {/* <Offre offre ={profileCompany.offre}/> */}

            <button
              onClick={() => this.onDeleteClick()}
              className="btn btn-danger"
              style={{ margin: '20px 10px 60px' }}
            >
              Delete Account
            </button>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardCompanyContent = (
          <div>
            <p className="lead text-muted">Welcome {company.name}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-company-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardCompanyContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DashboardCompany.propTypes = {
  getCurrentProfileCompany: PropTypes.func.isRequired,

  authCompany: PropTypes.object.isRequired,
  profileCompany: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profileCompany: state.profileCompany,
  authCompany: state.authCompany,
  jobOffers: state.offersReducer
});

export default connect(
  mapStateToProps,
  { getCurrentProfileCompany, deleteCompanyAccount }
)(DashboardCompany);
