import styled from 'styled-components/macro';

import {
  ContainerCenterColumn,
  ContainerCenterRow,
  ContainerSpaceBetween,
  Header1,
  Header3,
  Links,
  Paragraph,
} from '../styles/styles';
import Coding from '../images/computers.svg';

const Nav = styled.div`
  width: 100%;
  height: 133px;
  border-bottom: 1px solid black;
`;

const LeftLinks = styled.div`
  padding-left: 2rem;
  img {
    margin-top: 1rem;
    margin-right: 0.5rem;
    height: 100px;
    width: 100px;
    padding: 0.5rem;
    object-fit: cover;
  }
`;
const RightLinks = styled.div`
  height: 116px;
  padding-right: 2rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <ContainerSpaceBetween>
        <Links
          to='/'
          css={`
            &:hover {
              border-bottom: none;
              border-top: none;
            }
          `}
        >
          <LeftLinks>
            <ContainerCenterRow>
              <img src={Coding} alt='Coding' />
              <ContainerCenterColumn>
                <Header1
                  css={`
                    align-self: flex-start;
                  `}
                >
                  Javascript Reviewer
                </Header1>
                <Header3
                  css={`
                    align-self: flex-start;
                  `}
                >
                  Starting From Fundamentals to Frameworks
                </Header3>
                <Paragraph
                  css={`
                    align-self: flex-start;
                  `}
                >
                  By: Rico John Dato-on
                </Paragraph>
              </ContainerCenterColumn>
            </ContainerCenterRow>
          </LeftLinks>
        </Links>

        <RightLinks
          css={`
            display: flex;
            align-items: center;
          `}
        >
          <Links to='/'>Javascript</Links>
          <Links to='/react'>React</Links>
          <Links to='redux'>Redux</Links>
        </RightLinks>
      </ContainerSpaceBetween>
    </Nav>
  );
};

export default Navbar;
