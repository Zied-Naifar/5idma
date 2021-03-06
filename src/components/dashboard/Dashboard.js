import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCurrentProfileStudent,
  deleteStudentAccount
} from '../../actions/profileStudent';
import ProfileStudent from '../profile-student/ProfileStudent';
import Spinner from '../common/Spinner';
import ProfileStudentActions from './ProfileStudentAction';
// import Experience from './Experience';
// import Education from './Education';

class Dashboard extends Component {
  componentWillMount() {
    this.props.getCurrentProfileStudent(this.props.auth.student.id);
  }

  onDeleteClick = () => {
    this.props.deleteStudentAccount();
  };
  render() {
    const { student } = this.props.auth;
    const { profileStudent, loading } = this.props.profileStudent;

    let dashboardContent;

    if (profileStudent === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      //   Check if logged in user has profile data
      if (Object.keys(profileStudent).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              {`Welcome ${student.name.toUpperCase()}`}
            </p>
            <ProfileStudentActions />
            <ProfileStudent />
            {/* <Experience experience={profileStudent.experience} />
            <Education education={profileStudent.education} /> */}
            <button
              onClick={this.onDeleteClick}
              className="btn btn-danger"
              style={{ margin: '20px 10px 60px' }}
            >
              Delete My Account
            </button>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {student.name}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-student-profile" className="btn btn-lg btn-info">
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
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfileStudent: PropTypes.func.isRequired,
  deleteStudentAccount: PropTypes.func.isRequired,

  auth: PropTypes.object.isRequired,
  profileStudent: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profileStudent: state.profileStudent,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfileStudent, deleteStudentAccount }
)(Dashboard);
