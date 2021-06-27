import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import {
  Header1,
  Header2,
  Header3,
  ContainerSpaceBetween,
} from '../styles/styles';
import { javascriptTopic, javscriptCategory } from '../data/javascript';
import { javascriptQA, javascriptCodes } from '../data/javascript';

import Aside from '../components/Aside';

const Section = styled.div`
  padding: 2rem 9rem;
`;

const Container = styled.div``;
const QAContainer = styled.div``;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const AnswersContainer = styled.div`
  padding-left: 2.5rem;
  padding-bottom: 1rem;
`;

const Javascript = () => {
  const getCategory = useSelector((state) => state.getJavascriptCategory);

  const { category } = getCategory;

  const qa = javascriptQA.filter((qa) => qa.categoryId === category.categoryId);

  const codes = javascriptCodes.filter(
    (codes) => codes.categoryId === category.categoryId
  );

  return (
    <Section>
      <ContainerSpaceBetween>
        <Container
          css={`
            align-self: flex-start;
          `}
        >
          <Header1
            css={`
              align-self: flex-start;
            `}
          >
            {category.category}
          </Header1>
          {qa.map((qa, idx) => (
            <QAContainer key={qa._id}>
              <QuestionsContainer>
                <Header2>
                  {`Q${idx + 1}).`} {qa.question}
                </Header2>
              </QuestionsContainer>
              <AnswersContainer>
                <Header3>{`${qa.answer}`}</Header3>
              </AnswersContainer>
            </QAContainer>
          ))}
          {codes > 0 && <Header1>Sample Codes</Header1>}
          {codes.map((codes) => (
            <iframe
              title={category._id}
              src={codes.iFrame.source}
              style={codes.iFrame.style}
              key={codes._id}
              sandbox='allow-scripts allow-same-origin'
            >
              {codes._id}
            </iframe>
          ))}
        </Container>
        <Aside
          css={`
            align-self: flex-start;
          `}
          topics={javascriptTopic}
          categories={javscriptCategory}
        />
      </ContainerSpaceBetween>
    </Section>
  );
};

export default Javascript;
