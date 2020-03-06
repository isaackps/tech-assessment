import { connect } from 'react-redux';
import HomePage from './HomePage';
import { withRouter } from 'react-router-dom';

// import {  } from '../../models/browse';

const s = (/* state */) => ({});

const d = (/* dispatch */) => ({});

export default withRouter(connect(s, d)(HomePage));
