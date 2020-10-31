import React from 'react';
import styled from '@emotion/native';

// Components
import MenuSelection from '../MenuSelection';
import ButtonsContainer from '../ButtonsContainer';
import MultiStepSwitch from '../MultiStepSwitch';
import {useSelector} from 'react-redux';
import State from 'models/State.interface';

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
  const activeStep = useSelector((state: State) => state.multiStep.activeStep);

  const isTabSelected = (tabNumber: number): boolean => {
    return activeStep === tabNumber;
  };

  return (
    <Container>
      <StepContainer>
        <MenuSelection
          stepNumber="1"
          stepTitle="General Information"
          isSelected={isTabSelected(0)}
        />
        <MenuSelection
          stepNumber="2"
          stepTitle="Conditions"
          isSelected={isTabSelected(1)}
        />
        <MenuSelection
          stepNumber="3"
          stepTitle="Medical Questions"
          isSelected={isTabSelected(2)}
        />
        <MenuSelection
          stepNumber="4"
          stepTitle="Summary"
          isSelected={isTabSelected(3)}
        />
        <MenuSelection
          stepNumber="5"
          stepTitle="Terms"
          isSelected={isTabSelected(4)}
        />
      </StepContainer>

      <MultiStepSwitch />

      <ButtonsContainer />
    </Container>
  );
};

export default MultiStep;
