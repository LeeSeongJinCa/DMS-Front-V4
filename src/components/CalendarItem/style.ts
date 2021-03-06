import styled from 'styled-components';
import { globalColor } from '../../GlobalStyle';

interface CalendarItemProps {
  isSelected: boolean;
  isToday: boolean;
}
interface CalendarInfoProps {
  isSelected: boolean;
}
export const CalendarItem = styled.div<CalendarItemProps>`
  display: flex;
  width: 5.875rem;
  height: 9.688rem;
  background-color: ${props => (props.isSelected ? globalColor : 'white')};
  border: ${props => (props.isToday ? `0.1rem solid ${globalColor}` : 'none')}
  border-radius: 0px 6.25rem 6.25rem / 6.5rem;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const CalendarInfoWrapper = styled.div`
  display: flex;
  height: 6.438rem;
  margin-top:1.563rem;
  flex-direction: column
  justify-content: space-between;
`;

export const CalendarInfo = styled.p<CalendarInfoProps>`
  color: ${props => (props.isSelected ? 'white' : '#59545d')};

  font-size: 1.375rem;
`;
