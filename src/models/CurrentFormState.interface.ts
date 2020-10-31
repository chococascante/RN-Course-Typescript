import Condition from './Condition.interface';
import GeneralInformation from './GeneralInformation.interface';

export default interface CurrentFormState {
  generalInformation: GeneralInformation;
  selectedConditions: Condition[];
  testField?: number;
}
