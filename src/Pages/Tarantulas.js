import React from 'react';
import UserPageTemplate from 'Templates/UserPageTemplate';
import ProductsTemplate from 'Templates/ProductsTemplate/ProductsTemplate';
import ProductCard from 'Components/Molecules/ProductCard/ProductCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Tarantulas = ({ tarantulas }) => (
  <UserPageTemplate>
    <ProductsTemplate productsType="Tarantulas">
      {tarantulas.map((elem) => (
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

Tarantulas.propTypes = {
  tarantulas: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = ({ tarantulas }) => ({ tarantulas });
export default connect(mapStateToProps)(Tarantulas);
