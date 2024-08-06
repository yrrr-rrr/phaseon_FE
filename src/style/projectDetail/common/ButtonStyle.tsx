import styled from 'styled-components';

export const Button = styled.button<{ $border: string; $color: string; $type: string }>`
  padding: 14px 10.7px;
  width: 117px;
  height: 48px;
  box-sizing: border-box;
  border: ${({ $border }) => $border};
  border-radius: 10px;

  color: ${({ $color }) => $color};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.091px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ $type }) => ($type == 'star' ? '#69ACFF' : 'white')};
  outline: none;
  cursor: pointer;

  &&:hover {
    background-color: ${({ $type }) => ($type == 'star' ? '#63A1EE' : '#F7FBFF')};
  }
  &&:active {
    background-color: ${({ $type }) => ($type == 'star' ? '#5A91D6' : '#EDF5FF')};
  }
`;
