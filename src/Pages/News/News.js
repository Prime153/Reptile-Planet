import React from 'react';
import UserPageTemplate from 'Templates/UserPageTemplate';
import NewsCard from 'Components/Molecules/NewsCard/NewsCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from './NewsStyled';

const News = ({ articles }) => (
  <UserPageTemplate>
    <Container>
      {articles.map((elem) => (
        <NewsCard
          key={elem.id}
          image={elem.image}
          date={elem.date}
          heading={elem.heading}
          text={elem.text}
          side={elem.side}
        />
      ))}
    </Container>
  </UserPageTemplate>
);

News.propTypes = {
  articles: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = ({ articles }) => ({ articles });
export default connect(mapStateToProps)(News);
