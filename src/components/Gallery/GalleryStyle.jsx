import styled from "styled-components";
import { AiOutlineEye } from "react-icons/ai";

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 20px auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const GalleryContent = styled.div`
  overflow: hidden;
  height: 0;
  padding: 50% 0;
  /* padding controls height, will always be perfectly square regardless of width */
  position: relative;
  opacity: 0.8;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateY(-0.5rem);

    svg {
      margin-top: 0;
    }
  }

  svg {
    margin-top: -250px;
    transition: 0.3s ease-in-out;
  }
`;

export const Image = styled.img`
  min-width: 100%;
  min-height: 100%;
  max-width: 150%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  transition: 0.5s ease-in-out;
`;

export const Icons = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
`;

export const ViewIcon = styled(AiOutlineEye)`
  font-size: 3rem;
  color: #7337c2;
  transition: 0.3s ease-in-out;

  &:hover {
    padding: 10px;
    background: #ffffff;
    border-radius: 50%;
  }
`;
