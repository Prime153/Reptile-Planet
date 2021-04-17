import React from 'react';
import UserPageTemplate from 'Templates/UserPageTemplate';
import Line from 'Components/Atoms/Line/Line';
import HomeDescriptionWrapper from 'Components/Molecules/HomeDescriptionWrapper/HomeDescriptionWrapper';
import { drawOffer as drawOfferAction } from 'Actions/index';
import { useDispatch } from 'react-redux';
import OfferHomeWrapper from 'Components/Organisms/OfferHomeWrapper/OfferHomeWrapper';
import Slider from 'Components/Molecules/Slider/Slider';

const Home = () => {
  const disptach = useDispatch();

  const drawOffer = () => disptach(drawOfferAction());
  drawOffer();

  return (
    <UserPageTemplate>
      <Slider />
      <Line />
      <OfferHomeWrapper />
      <Line />
      <HomeDescriptionWrapper />
      <HomeDescriptionWrapper second />
      <Line />
    </UserPageTemplate>
  );
};

export default Home;
