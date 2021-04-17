import React from 'react';
import DetailsTemplate from 'Templates/DetailsTemplate/DetailsTemplate';
import { useParams, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const DetailsPage = ({ state }) => {
  const { id } = useParams();
  const location = useLocation();
  let specificLocation = '';

  if (location.pathname === `/shop/reptiles/lizards/${id}`) {
    specificLocation = 'lizards';
  }
  if (location.pathname === `/shop/reptiles/snakes/${id}`) {
    specificLocation = 'snakes';
  }
  if (location.pathname === `/shop/arachnids/tarantulas/${id}`) {
    specificLocation = 'tarantulas';
  }
  if (location.pathname === `/shop/arachnids/scorpions/${id}`) {
    specificLocation = 'scorpions';
  }
  if (location.pathname === `/shop/accessories/${id}`) {
    specificLocation = 'accessories';
  }

  const detailsProduct = state[specificLocation].find(
    // eslint-disable-next-line radix
    (elem) => elem.id === parseInt(id),
  );

  return (
    <DetailsTemplate
      id={detailsProduct.id}
      species={detailsProduct.species}
      name={detailsProduct.name}
      birth={detailsProduct.birth}
      price={detailsProduct.price}
      picture={detailsProduct.picture}
      available={detailsProduct.available}
      stock={detailsProduct.stock}
      description={detailsProduct.description}
      category={detailsProduct.category}
      feedingAndSupplementation={
        detailsProduct.FeedingAndSupplementation
      }
      housing={detailsProduct.housing}
    />
  );
};

DetailsPage.propTypes = {
  state: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({ state });
export default connect(mapStateToProps)(DetailsPage);
