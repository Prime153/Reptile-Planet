/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { fetchWeather as fetchWeatherAction } from 'Actions/index';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
  Container,
  StyledHeading,
  StyledInput,
  StyledButton,
  TempText,
} from './WeatherWrapperStyled';

const WeatherWrapper = ({ cityLocation, error }) => {
  const dispatch = useDispatch();
  const getWeather = (city) => dispatch(fetchWeatherAction(city));
  const [handleValue, changeValue] = useState(null);
  const key = uuidv4();

  return (
    <Container>
      <StyledHeading>Warning!</StyledHeading>
      <span>We don&apos;t ship animals below 5 degrees Celsius</span>
      <span>
        For animal safety we reserve the right to send your pet due to
        the prevailing weather.
      </span>
      <span>We ship from monday to wednesday </span>
      <span>Check the weather condition:</span>
      <div>
        <StyledInput
          onChange={(e) => changeValue(e.target.value)}
          placeholder="Your Location..."
        />
        <StyledButton onClick={() => getWeather(handleValue)}>
          Check
        </StyledButton>
      </div>
      <div>
        {cityLocation.map((elem) =>
          error ? (
            <TempText red key={key}>
              Oops, not found
            </TempText>
          ) : (
            <>
              {elem.main.temp >= 5 ? (
                <TempText key={key}>
                  {elem.name} looks to be ok!{' '}
                  <span>
                    {Math.floor(elem.main.temp)}
                    <sup>o</sup>C
                  </span>
                </TempText>
              ) : (
                <TempText red key={key}>
                  {elem.name} Oh no, it looks that your order will be
                  shipped late
                  <span>
                    {' '}
                    {Math.floor(elem.main.temp)}
                    <sup>o</sup>C
                  </span>
                </TempText>
              )}
            </>
          ),
        )}
      </div>
    </Container>
  );
};

WeatherWrapper.propTypes = {
  error: PropTypes.bool.isRequired,
  cityLocation: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = ({ cityLocation, error }) => ({
  cityLocation,
  error,
});

export default connect(mapStateToProps)(WeatherWrapper);
