import CurrentFormState from './CurrentFormState.interface';
import MultiStepState from './MultiStepState.inteface';

export default interface State {
  multiStep: MultiStepState;
  currentForm: CurrentFormState;
}
