import { connect } from 'react-redux';
import AppLayout from './AppLayout';
import { withRouter } from 'react-router-dom';

// import {  } from '../../models/browse';

const s = (/* state */) => ({});

const d = (/* dispatch */) => ({});

export default withRouter(
  connect(
    s,
    d
  )(AppLayout)
);
