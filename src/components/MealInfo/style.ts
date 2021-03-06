import styled, { css } from 'styled-components';

interface propsType {
  isLong: boolean;
}

export const InfoContainer = styled.div`
  display: flex;
  width: 14.13rem;
  height: 20rem;
  margin-left: 2.875rem;
  margin-top: 1rem;
  flex-direction: column;
`;

export const InfoItem = styled.span<propsType>`
  font-size: ${props => props.isLong ? "1.375rem": "1.09rem"}
  display: flex;
  align-items: center;
  color: #59545d;
  font-weight: 400;
  height: 3.3rem;
  flex-shrink: 1;
`;

export const NoMeal = styled.span`
  font-size: 1.375rem;
  color: #59545d;
  font-weight: 400;
  margin-left: 2.875rem;
  margin-top: 1rem;
`;
