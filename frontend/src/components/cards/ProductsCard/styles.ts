import styled from 'styled-components';
import {
  Colors,
  Card as BlueprintCard,
  FormGroup as BlueprintFormGroup,
} from '@blueprintjs/core';

export const Card = styled(BlueprintCard)`
  padding: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const FormGroup = styled(BlueprintFormGroup)`
  margin: 0;
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 20px;
`;

export const Label = styled.p`
  flex: 1 1 20rem;
  margin: 0;
`;

export const ListItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 20px;
  border-top: 1px solid rgb(255, 255, 255, 0.2);
`;

export const ListText = styled.p`
  flex: 1 1 20rem;
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  right: 15px;
`;

export const Spacing = styled.div`
  width: 0.8rem;
`;
