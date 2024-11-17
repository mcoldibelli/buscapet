import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    height: 700px;
    max-width: 550px;
    margin: auto;
    background-color: ${theme.colors.primary};
    color: white;
    border-radius: 0.75rem;
    padding: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid white;
        padding: 1rem;
        border-radius: 0.5rem;
    }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const StepNavigation = styled.div`
  display: flex;
  justify-content: center;
  height: 5rem;

  button {
    background-color: gray;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 600;
    height: 3rem;
    color: white;

    &:not(:last-child) {
      margin-right: 1rem;
    }

    &:disabled {
      background-color: ${theme.colors.secondary};
      cursor: not-allowed;
    }
  }
`;

export const ImageSelection = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid white;
    margin: 0 1rem;
    cursor: pointer;

    &.active {
      border-color: ${theme.colors.secondary};
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  label {
    color: white;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  select,
  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
  }

  select,
  input {
    background-color: white;
    color: black;
  }

  textarea {
    background-color: white;
    color: black;
    height: 6rem;
    resize: vertical;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${theme.colors.secondary};
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.secondary};
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;