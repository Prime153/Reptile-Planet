import React from 'react';
import UserPageTemplate from 'Templates/UserPageTemplate';
import ProductsTemplate from 'Templates/ProductsTemplate/ProductsTemplate';
import ProductCard from 'Components/Molecules/ProductCard/ProductCard';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Scorpions = ({ scorpions }) => (
  <UserPageTemplate>
    <ProductsTemplate productsType="Scorpions">
      {scorpions.map((elem) => (
        <ProductCard
          id={elem.id}
          key={elem.id}
          image={elem.picture}
          species={elem.species}
          name={elem.name}
          birth={elem.birth}
          price={elem.price}
          category={elem.category}
          order={elem.order}
        />
      ))}
    </ProductsTemplate>
  </UserPageTemplate>
);

Scorpions.propTypes = {
  scorpions: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = ({ scorpions }) => ({ scorpions });
export default connect(mapStateToProps)(Scorpions);
