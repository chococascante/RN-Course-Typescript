import React from 'react';
import styled from '@emotion/native';
import {useDispatch, useSelector} from 'react-redux';
import State from '../../models/State.interface';
import {setActiveStep} from '../../store/actions/MultiStep';
import {
  retrieveDataFromStorage,
  saveFormInStorage,
} from 'store/actions/CurrenForm';

const Container = styled.SafeAreaView`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 20;
`;

const Button = styled.Button``;

const ButtonsContainer = () => {
  const activeStep = useSelector((state: State) => state.multiStep.activeStep);
  const dispatch = useDispatch();

  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === 4;

  const handleBackPress = () => {
    if (!isFirstStep) dispatch(setActiveStep(activeStep - 1));
  };

  const handleNextPress = () => {
    if (!isLastStep) dispatch(setActiveStep(activeStep + 1));
  };

  const handleSaveButton = () => {
    dispatch(saveFormInStorage());
  };

  const handleGetDataButton = () => {
    dispatch(retrieveDataFromStorage());
  };

  return (
    <Container>
      <Button title="Get Data" onPress={handleGetDataButton} />
      <Button title="Save Data" onPress={handleSaveButton} />

      <Button disabled={isFirstStep} title="Back" onPress={handleBackPress} />
      <Button
        disabled={isLastStep}
        title={isLastStep ? 'Finish' : 'Next'}
        onPress={handleNextPress}
      />
    </Container>
  );
};

export default ButtonsContainer;
