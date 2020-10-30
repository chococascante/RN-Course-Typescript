import React from 'react';
import styled from '@emotion/native';

interface NumberProps {
  selected: boolean;
}

const Number = styled.Text`
  // @ts-expect-error
  background-color: ${(props: NumberProps) =>
    props.selected ? '#0080bf' : '#ccc'};
  border-radius: 50px;
  width: 24;
  height: 24;
  text-align: center;
  color: #fff;
  margin-bottom: 10;
`;

const StepTitle = styled.Text`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80;
  text-align: center;
`;

const Container = styled.View`
  display: flex;
  align-items: center;
`;

interface Props {
  stepNumber: string;
  stepTitle: string;
  isSelected: boolean;
}

const MenuSelection: React.FC<Props> = ({
  stepNumber,
  stepTitle,
  isSelected,
}: Props) => {
  return (
    <Container>
      <Number selected={isSelected}>{stepNumber}</Number>
      <StepTitle>{stepTitle}</StepTitle>
    </Container>
  );
};

export default MenuSelection;
