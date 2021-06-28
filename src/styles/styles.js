import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const ContainerCenterColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerCenterRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContainerSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Header1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
`;

export const Header2 = styled.h2`
  font-size: 25px;
  font-weight: 400;
`;

export const Header3 = styled.h3`
  font-size: 20px;
  font-weight: 400;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const Links = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  margin-right: 1rem;
  color: inherit;
  cursor: pointer;

  &:hover {
    border-top: 1px solid #fbd428;
    border-bottom: 1px solid #fbd428;
  }
`;
