import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.$orange ? '#FD7114' : 'white')};
  color: ${(props) => (props.$orange ? '#fff' : '#FD7114')};
  border-radius: 4px;
  border: 2px solid #fd7114;
  cursor: pointer;
  width: 220px;
  height: 36px;

  &:hover {
    background-color: ${(props) => (props.$orange ? '#fff' : '#FD7114')};
    color: ${(props) => (props.$orange ? '#FD7114' : '#fff')};
  }
`;

export const LoadMoreButton = styled(StyledButton)`
  background-color: #148dfd;
  color: white;
  width: 150px;
  border: none;
  font-weight: bold;

  &:hover {
    background-color: #148dfd;
    color: white;
  }
`;
