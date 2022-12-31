import styled from '@emotion/styled';

export const FilteredList = styled.ul`
  margin: 8px 0 60px;
  text-align: left;
  padding: 0 16px;
  list-style-position: outside;
  min-height: 200px;
  background-color: #cecccc;
  border-radius: 10px;
`;
export const FilteredListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  & p {
    margin: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
  }
`;
export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-family: 'Roboto', monospace;
  width: 80px;
  height: 24px;
  background-color: #fd6a50;
  border: 1px solid #efefef;
  border-radius: 5px;
  transition: background-color 350ms linear;
  cursor: poiter;
  &:hover {
    background-color: #faeb62;
    box-shadow: 1px 1px;
    font-size: 14px;
  }
`;
