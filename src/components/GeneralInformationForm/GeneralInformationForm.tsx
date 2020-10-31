import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import GeneralInformation from 'models/GeneralInformation.interface';
import {useDispatch, useSelector} from 'react-redux';
import {setGeneralInformation} from 'store/actions/CurrenForm';
import State from 'models/State.interface';
import Container from 'components/Container';

const GeneralInformationForm = () => {
  const dispatch = useDispatch();

  const initialGeneralInfo = useSelector(
    (state: State) => state.currentForm.generalInformation,
  );

  const [firstName, setFirstName] = useState<string>(
    initialGeneralInfo.firstName,
  );
  const [lastName, setLastName] = useState<string>(initialGeneralInfo.lastName);
  const [gender, setGender] = useState<string>(initialGeneralInfo.gender);
  const [date, setDate] = useState<string>(initialGeneralInfo.date);
  const [email, setEmail] = useState<string>(initialGeneralInfo.email);
  const [phone, setPhone] = useState<string>(initialGeneralInfo.phone);
  const [address, setAddress] = useState<string>(initialGeneralInfo.address);
  const [zip, setZip] = useState<string>(initialGeneralInfo.zip);
  const [city, setCity] = useState<string>(initialGeneralInfo.city);
  const [state, setState] = useState<string>(initialGeneralInfo.state);
  const [maritalStatus, setMaritalStatus] = useState<string>(
    initialGeneralInfo.maritalStatus,
  );

  const handleOnBlur = () => {
    const generalInfo: GeneralInformation = {
      firstName,
      lastName,
      gender,
      date,
      email,
      phone,
      address,
      zip,
      city,
      state,
      maritalStatus,
    };

    dispatch(setGeneralInformation(generalInfo));
  };

  const handleMaritalOnChange = (event: string) => {
    setMaritalStatus(event);
    handleOnBlur();
  };

  return (
    <Container>
      <TextInput
        onBlur={handleOnBlur}
        label="First Name"
        value={firstName}
        onChangeText={(e) => setFirstName(e)}
      />
      <TextInput
        onBlur={handleOnBlur}
        label="Last Name"
        value={lastName}
        onChangeText={(e) => setLastName(e)}
      />
      <TextInput
        onBlur={handleOnBlur}
        label="Gender"
        value={gender}
        onChangeText={(e) => setGender(e)}
      />
      <TextInput
        onBlur={handleOnBlur}
        label="Date"
        value={date}
        onChangeText={(e) => setDate(e)}
      />
      <TextInput
        onBlur={handleOnBlur}
        label="Email"
        value={email}
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        onBlur={handleOnBlur}
        label="Phone"
        value={phone}
        onChangeText={(e) => setPhone(e)}
      />
      <TextInput
        onBlur={handleOnBlur}
        label="Street Address"
        value={address}
        onChangeText={(e) => setAddress(e)}
      />
      <TextInput
        onBlur={handleOnBlur}
        label="ZIP Code"
        value={zip}
        onChangeText={(e) => setZip(e)}
      />
      <TextInput
        onBlur={handleOnBlur}
        label="City"
        value={city}
        onChangeText={(e) => setCity(e)}
      />
      <TextInput
        onBlur={handleOnBlur}
        label="State"
        value={state}
        onChangeText={(e) => setState(e)}
      />
      <TextInput
        onBlur={handleOnBlur}
        label="Marital Status"
        value={maritalStatus}
        onChangeText={handleMaritalOnChange}
      />
    </Container>
  );
};

export default GeneralInformationForm;
