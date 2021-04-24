import React, { useEffect } from 'react';
import UserPageTemplate from 'Templates/UserPageTemplate';
import Line from 'Components/Atoms/Line/Line';
import HomeDescriptionWrapper from 'Components/Molecules/HomeDescriptionWrapper/HomeDescriptionWrapper';
import { drawOffer as drawOfferAction } from 'Actions/index';
import { useDispatch } from 'react-redux';
import OfferHomeWrapper from 'Components/Organisms/OfferHomeWrapper/OfferHomeWrapper';
import Slider from 'Components/Molecules/Slider/Slider';
import WhyUsWrapper from 'Components/Molecules/WhyUsWrapper/WhyUsWrapper';

const Home = () => {
  const disptach = useDispatch();
  useEffect(() => {
    const drawOffer = () => disptach(drawOfferAction());

    drawOffer();
  });

  return (
    <UserPageTemplate>
      <Slider />
      <Line />
      <WhyUsWrapper />
      <HomeDescriptionWrapper />
      <Line />
      <OfferHomeWrapper />
      <Line />
      <HomeDescriptionWrapper second />
      <Line />
    </UserPageTemplate>
  );
};

export default Home;
