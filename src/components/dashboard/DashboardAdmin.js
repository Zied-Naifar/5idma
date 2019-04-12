import React, { Component } from "react";
import JobOffer from "../jobOffer";
import { connect } from "react-redux";
import { fetchApplied } from "../../actions/actions";


class DashboardAdmin extends Component {
  componentWillMount() {
    this.props.fetchApplied();
    // this.props.getStudentProfiles();
  }
  componentWillUpdate() {
    // this.props.getCurrentProfileStudent();
    console.log(' componentWillUpdateAdmin')
  }
  render() {
    return !this.props.appliedOffers ? (
      "Loading"
    ) : (
      <div>
        <div>
          {this.props.appliedOffers.map(
            (el, i) => {
              if (Object.values(el).length) {
                return <JobOffer offer={el} key={i} />;
              } else {
                return [];
              }
            }
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appliedOffers: state.appliedReducer
});

const fetchAppliedToOffers = () => dispatch => {
    dispatch(fetchApplied());
  };

const mapDispatchToProps = {
  // getStudentProfiles,
  fetchApplied : fetchAppliedToOffers
  }

const ConnectedDashboardAdmin = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardAdmin);

export default ConnectedDashboardAdmin;