import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="DetailsPageContainer">
      <Link to="/">Home</Link>
      <h1 className="Title">Hello World!!! { id }</h1>
    </div>
  );
};

export default DetailsPage;
