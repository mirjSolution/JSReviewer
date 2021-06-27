import { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { Header2, ContainerSpaceBetween } from '../styles/styles';
import { BiPlus, BiMinus } from 'react-icons/bi';

const IconStyle = css`
  width: 20px;
  height: 20px;
`;
const PlusIcon = styled(BiPlus)`
  ${IconStyle}
`;
const MinusIcon = styled(BiMinus)`
  ${IconStyle}
`;
const Container = styled.div``;
const HeaderWrapper = styled.div``;

const Toggle = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Container onClick={() => setToggle(!toggle)}>
      <HeaderWrapper>
        <ContainerSpaceBetween>
          <Header2>{title}</Header2>
          {toggle ? <MinusIcon /> : <PlusIcon />}
        </ContainerSpaceBetween>
      </HeaderWrapper>

      {toggle ? children : ''}
    </Container>
  );
};

export default Toggle;
