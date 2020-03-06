import React, { PureComponent } from 'react';

// import NavMenu from ''
class AppLayout extends PureComponent {
  render() {
    return (
      <div className="AppLayoutContainer">
        { /* <Popup /> */ }
        { /* <NavMenu /> */ }
        <div className="content">{ this.props.children }</div>
        { /* <Footer /> */ }
      </div>
    );
  }
}

export default AppLayout;
