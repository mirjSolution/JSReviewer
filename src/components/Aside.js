import React from 'react';
import styled from 'styled-components/macro';
import Search from './Search';
import { Header2 } from '../styles/styles';
import Topics from './Topics';

const Section = styled.aside``;
const Container = styled.div`
  margin-top: 1rem;
`;

const Aside = ({ topics, categories }) => {
  return (
    <Section>
      <Search />
      <Container>
        <Header2
          css={`
            font-weight: bold;
          `}
        >
          TOPICS
        </Header2>
        <Topics topics={topics} categories={categories} />
      </Container>
    </Section>
  );
};

export default Aside;
