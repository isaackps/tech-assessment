import React from 'react';

const AppLayout = props => {
  return (
    <div className="AppLayoutContainer">
      <div className="content">{ props.children }</div>
    </div>
  );
};

export default AppLayout;
