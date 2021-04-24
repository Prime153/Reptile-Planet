import React from 'react';
import UserPageTemplate from 'Templates/UserPageTemplate';
import ProductsTemplate from 'Templates/ProductsTemplate/ProductsTemplate';
import PropTypes from 'prop-types';
import ProductCard from 'Components/Molecules/ProductCard/ProductCard';
import { connect } from 'react-redux';

const Accessories = ({ accessories }) => (
  <UserPageTemplate>
    <ProductsTemplate productsType="Accessories">
      {accessories.map((elem) => (
        <ProductCard
          id={elem.id}
          key={elem.id}
          image={elem.picture}
          species={elem.species}
          price={elem.price}
          order={elem.order}
          name={elem.name}
          category={elem.category}
          home={false}
        />
      ))}
    </ProductsTemplate>
  </UserPageTemplate>
);

Accessories.propTypes = {
  accessories: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = ({ accessories }) => ({ accessories });
export default connect(mapStateToProps)(Accessories);
