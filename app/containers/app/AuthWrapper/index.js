import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { ButtonGroup, Button } from '@blueprintjs/core';
import classnames from 'classnames/bind';

import { changeTheme } from '../../../redux/modules/app/theme';

import SignIn from '../../auth/SignIn';
import SignUp from '../../auth/SignUp';
// import ResetPassword from '../../auth/ResetPassword';

import s from './styles.css';
import { THEMES } from '../../../utils/theme';

import logoSvg from '../../../assets/images/logo.svg';

class AuthWrapper extends Component {
  render() {
    const {
      theme,
      changeTheme
    } = this.props;

    return (
      <div className={s.auth}>
        <div className={s.topbar}>
          <div>
            <ButtonGroup large={false}>
              <Button
                icon="moon"
                text="Dark theme"
                className={classnames(theme === THEMES.dark ? 'pt-active' : null, 'pt-minimal')}
                onClick={() => changeTheme(THEMES.dark)}
              />

              <Button
                icon="flash"
                text="Light theme"
                className={classnames(theme === THEMES.light ? 'pt-active' : null, 'pt-minimal')}
                onClick={() => changeTheme(THEMES.light)}
              />
            </ButtonGroup>
          </div>
        </div>
        <div className={s.logoWrap}>
          <img className={s.logo} alt="MOON Wallet" src={logoSvg} />
        </div>
        <Switch>
          <Route exact path="/auth/sign-in" component={SignIn} />
          <Route exact path="/auth/sign-up" component={SignUp} />
          {/* <Route exact path="/auth/reset-password" component={ResetPassword} /> */}
          <Redirect from="*" to="/auth/sign-in" />
        </Switch>
      </div>
    );
  }
}

const ConnectedComponent = connect(
  (state) => ({ ...state.app.theme }),
  {
    changeTheme
  }
)(AuthWrapper);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
