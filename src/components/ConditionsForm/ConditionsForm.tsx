import React from 'react';
import {View, Text, FlatList} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import DropDownPicker from 'react-native-dropdown-picker';
import Container from 'components/Container';
import conditionsMock from 'mocks/conditions.json';
import {useDispatch, useSelector} from 'react-redux';
import State from 'models/State.interface';
import Condition from 'models/Condition.interface';
import {setSelectedConditions} from 'store/actions/CurrenForm';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

interface Item {
  item: Condition;
}

const size = 18;

const icons = {
  search: {
    name: 'magnifier',
    size,
  },
  arrowUp: {
    name: 'arrow-up',
    size,
  },
  arrowDown: {
    name: 'arrow-down',
    size,
  },
  close: {
    name: 'close',
    size,
  },
  check: {
    name: 'check',
    size,
  },
  cancel: {
    name: 'close',
    size,
  },
};

const ConditionsForm = () => {
  const dispatch = useDispatch();

  const selectedConditions = useSelector(
    (state: State) => state.currentForm.selectedConditions,
  );

  const renderItem = ({item}: Item) => <Text>{item.condition}</Text>;

  const handleSelectChange = (newConditions: any) => {
    const conditionsArray = newConditions.map((condition: string) => ({
      condition,
    }));
    dispatch(
      setSelectedConditions([...selectedConditions, ...conditionsArray]),
    );
  };

  return (
    <Container>
      <SectionedMultiSelect
        items={conditionsMock}
        selectText="Select conditions..."
        onSelectedItemsChange={handleSelectChange}
        uniqueKey="condition"
        subKey="items"
        icons={icons}
        IconRenderer={Icon}
        readOnlyHeadings={true}
        displayKey="condition"
      />
      <FlatList data={selectedConditions} renderItem={renderItem} />
    </Container>
  );
};

export default ConditionsForm;
