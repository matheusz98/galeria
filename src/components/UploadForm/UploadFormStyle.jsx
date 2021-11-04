import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const Form = styled.form`
  margin: 30px auto 10px;
  text-align: center;
`;

export const Label = styled.label`
  width: 200px;
  margin: 0 auto;
  cursor: pointer;
  display: block;
`;

export const Input = styled.input`
  display: none;
`;

export const Plus = styled(AiOutlinePlusCircle)`
  font-size: 3rem;
  color: #a25cd1;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #ffffff;
    transform: scale(1.2);
  }
`;

export const Output = styled.div`
  height: 60px;
  font-size: 1rem;
`;

export const Error = styled.div`
  color: #f85b5b;
`;

export const FileName = styled.div``;
