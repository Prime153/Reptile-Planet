import React from 'react';
import UserPageTemplate from 'Templates/UserPageTemplate';
import ProductsTemplate from 'Templates/ProductsTemplate/ProductsTemplate';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductCard from 'Components/Molecules/ProductCard/ProductCard';

const Lizards = ({ lizards }) => (
  <UserPageTemplate>
    <ProductsTemplate productsType="Lizards">
      {lizards.map((elem) => (
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

Lizards.propTypes = {
  lizards: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = ({ lizards }) => ({ lizards });
export default connect(mapStateToProps)(Lizards);
