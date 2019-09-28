import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import JobOffer from './jobOffer';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    margin: '0 auto'
  },

  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
});

class Dashboard extends React.Component {
  render() {
    const { classes, jobOffers, currentCompany } = this.props;
    return (
      <div className={classes.root}>
        <main className={classes.content}>
          <Typography variant="h4" gutterBottom component="h2">
            Offres de travail
          </Typography>
          <div>
            {jobOffers
              .filter(el => {
                if (currentCompany.id) {
                  return el.company._id === currentCompany.id;
                } else return el;
              })
              .map((el, i) => (
                <JobOffer offer={el} key={el._id} />
              ))}
          </div>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  jobOffers: state.offersReducer,
  currentCompany: state.authCompany.company
});

const ConnectedDashboard = connect(mapStateToProps)(Dashboard);

export default withStyles(styles)(ConnectedDashboard);
