import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '584610612080-n7bss1g48j1js8p9t7bvrmtgslvas261.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // console.log(window.gapi.auth2.getAuthInstance());
          this.onAuthChange(this.auth.isSignedIn.get());
          // console.log(window.gapi.auth2.getAuthInstance().isSignedIn);
          this.auth.isSignedIn.listen(this.onAuthChange);
          // the above line is used to chage the button text while singin & out
        });
    });
  }

  onAuthChange = (isSignedIned) => {
    if (isSignedIned) {
      // calling to the action index.js
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className='btn btn-danger' onClick={this.onSignOutClick}>
          <i className='google icon'></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button className='btn btn-success' onClick={this.onSignInClick}>
          <i className='google icon'></i>Sign In with Google
        </button>
      );
    }
  }
  renderName() {
    // console.log(this.auth);

    if (!this.props.isSignedIn) {
      return null;
    } else if (this.props.isSignedIn) {
      if (this.auth) {
        return (
          <span className='text-primary'>
            Hello{' '}
            {window.gapi.auth2
              .getAuthInstance()
              .currentUser.get()
              .getBasicProfile()
              .getName()}{' '}
          </span>
        );
      }
      return null;
    }
  }

  render() {
    return (
      <div>
        {this.renderName()}
        {this.renderAuthButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, userName: state.auth.userId };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
