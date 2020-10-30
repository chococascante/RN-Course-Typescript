import GeneralInformation from './GeneralInformation.interface';

export default interface Action {
  type: string;
  payload?: null | boolean | number | GeneralInformation;
}
