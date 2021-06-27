import styled from 'styled-components/macro';
import { Header1, ContainerSpaceBetween } from '../styles/styles';
import {
  javascriptTopic,
  javscriptCategory,
  javascriptQA,
} from '../data/javascript';

import Aside from '../components/Aside';

const Section = styled.div`
  padding: 2rem 9rem;
`;

const Javascript = () => {
  return (
    <Section>
      <ContainerSpaceBetween>
        <Header1
          css={`
            align-self: flex-start;
          `}
        >
          Javascript
        </Header1>
        <Aside
          topics={javascriptTopic}
          categories={javscriptCategory}
          qas={javascriptQA}
        />
      </ContainerSpaceBetween>
    </Section>
  );
};

export default Javascript;
