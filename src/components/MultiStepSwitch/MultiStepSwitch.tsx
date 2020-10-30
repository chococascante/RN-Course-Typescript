import React from 'react';
import {View, Text} from 'react-native';
import styled from '@emotion/native';
import {useSelector} from 'react-redux';
import State from '../../models/State.interface';

// Componentes
import GeneralInformationForm from '../GeneralInformationForm';
import ConditionsForm from '../ConditionsForm';
import MedicalForm from '../MedicalForm';
import Summary from '../Summary';
import Terms from '../Terms';

const MultiStepSwitch = () => {
  const activeStep = useSelector((state: State) => state.multiStep.activeStep);

  const renderContent = () => {
    switch (activeStep) {
      case 0:
        return <GeneralInformationForm />;

      case 1:
        return <ConditionsForm />;

      case 2:
        return <MedicalForm />;

      case 3:
        return <Summary />;

      case 4:
        return <Terms />;

      default:
        break;
    }
  };

  return <View>{renderContent()}</View>;
};

export default MultiStepSwitch;
