import { styled } from 'styled-components';
import { theme } from '../../styles/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > div {
      display: grid;
      grid-template-columns: 80% auto;
      gap: 0.5rem;
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.75rem;
  }
`;

export const ErrorMessageCategory = styled.span`
  margin-top: 0.125rem;
  font-size: 0.625rem;
  line-height: 80%;
  color: ${theme.colors.error};
`;
