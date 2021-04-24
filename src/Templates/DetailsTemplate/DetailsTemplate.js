import React, { useState } from 'react';
import UserPageTemplate from 'Templates/UserPageTemplate';
import PropTypes from 'prop-types';
import Button from 'Components/Atoms/Button/Button';
import { useHistory } from 'react-router-dom';
import Line from 'Components/Atoms/Line/Line';

import {
  Container,
  MainBoardContainer,
  Image,
  ProductInfoContainer,
  Species,
  Text,
  SpecificationContainer,
  CareHeadingsContainer,
  DescriptionsContainer,
  CareHeadings,
  BackButton,
} from './DetailsTemplateStyled';

const DetailsTemplate = ({
  id,
  species,
  name,
  birth,
  price,
  picture,
  available,
  stock,
  description,
  feedingAndSupplementation,
  housing,
  category,
}) => {
  const [handlecareDescription, changeCareDescription] = useState({
    des1: true,
    des2: false,
    des3: false,
  });
  const history = useHistory();

  return (
    <UserPageTemplate>
      <Container>
        <BackButton onClick={() => history.goBack()} />
        <MainBoardContainer>
          <Image src={picture} />
          <ProductInfoContainer>
            <div>
              <Species>{species}</Species>
              <Text>
                {name} {birth}
              </Text>
              <Text>{price} PLN</Text>
              <Text>{stock} in stock</Text>
            </div>
            <div>
              <Text> {available}</Text>
              <Button type={category} id={id} />
            </div>
          </ProductInfoContainer>
        </MainBoardContainer>
        <Line />
        <SpecificationContainer>
          <CareHeadingsContainer>
            <CareHeadings
              active={handlecareDescription.des1}
              type="button"
              onClick={() =>
                changeCareDescription(() => ({
                  des1: true,
                }))
              }
            >
              Description
            </CareHeadings>
            {category !== 'accessories' && (
              <>
                <CareHeadings
                  active={handlecareDescription.des2}
                  onClick={() =>
                    changeCareDescription(() => ({
                      des2: true,
                    }))
                  }
                >
                  Feeding and Supplementation
                </CareHeadings>
                <CareHeadings
                  active={handlecareDescription.des3}
                  onClick={() =>
                    changeCareDescription(() => ({
                      des3: true,
                    }))
                  }
                >
                  Housing
                </CareHeadings>
              </>
            )}
          </CareHeadingsContainer>
          <DescriptionsContainer>
            {handlecareDescription.des1 && (
              <>
                <span>{description}</span>
              </>
            )}
            {handlecareDescription.des2 && feedingAndSupplementation}
            {handlecareDescription.des3 && housing}
          </DescriptionsContainer>
        </SpecificationContainer>
      </Container>
    </UserPageTemplate>
  );
};

DetailsTemplate.propTypes = {
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  name: PropTypes.string,
  birth: PropTypes.string,
  price: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  available: PropTypes.string,
  stock: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  feedingAndSupplementation: PropTypes.string,
  housing: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  name: null,
  birth: null,
  available: null,
  feedingAndSupplementation: null,
  housing: null,
};

export default DetailsTemplate;
