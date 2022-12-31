import styled from '@emotion/styled';

export const FilterInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  gap: 8px;
  padding: 12px;
  background-color: #cecccc;
  border-radius: 10px;
  & input {
    width: 50%;
  }
  & input:focus {
    background-color: #faed76;
  }
`;
