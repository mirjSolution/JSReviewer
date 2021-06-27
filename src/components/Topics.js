import { useState } from 'react';
import styled from 'styled-components/macro';
import Toggle from '../components/Toggle';
import { Header3 } from '../styles/styles';

const Container = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #fbd428;
  cursor: pointer;
`;

const Categories = styled.div``;

const Topic = ({ topics, categories }) => {
  const categoryClick = (e, id) => {
    e.stopPropagation();
    console.log(id);
  };
  return (
    <>
      {topics.map((topic) => (
        <Container key={topic._id}>
          <Toggle title={topic.name}>
            <Categories>
              {categories
                .filter((category) => category.topicId === topic._id)
                .map((category) => (
                  <Header3
                    key={category._id}
                    onClick={(e) => categoryClick(e, category._id)}
                  >
                    {category.name}
                  </Header3>
                ))}
            </Categories>
          </Toggle>
        </Container>
      ))}
    </>
  );
};

export default Topic;
