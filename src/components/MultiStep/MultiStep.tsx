import React from 'react';
import styled from '@emotion/native';

// Components
import MenuSelection from '../MenuSelection';
import ButtonsContainer from '../ButtonsContainer';
import MultiStepSwitch from '../MultiStepSwitch';

const StepContainer = styled.SafeAreaView`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 10;
`;

const Container = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const MultiStep = () => {
  return (
    <Container>
      <StepContainer>
        <MenuSelection
          stepNumber="1"
          stepTitle="General Information"
          isSelected
        />
        <MenuSelection stepNumber="2" stepTitle="Conditions" isSelected />
        <MenuSelection
          stepNumber="3"
          stepTitle="Medical Questions"
          isSelected
        />
        <MenuSelection stepNumber="4" stepTitle="Summary" isSelected />
        <MenuSelection stepNumber="5" stepTitle="Terms" isSelected />
      </StepContainer>

      <MultiStepSwitch />

      <ButtonsContainer />
    </Container>
  );
};

export default MultiStep;
