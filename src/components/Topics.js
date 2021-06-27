import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { getJavascriptCategoryId } from '../actions/javascript';
import Toggle from '../components/Toggle';
import { Header3 } from '../styles/styles';

const Container = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #fbd428;
  cursor: pointer;
`;

const Categories = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  padding: 0.5rem 0;
`;

const Topic = ({ topics, categories }) => {
  const dispatch = useDispatch();

  const categoryClick = (e, categoryId, category) => {
    e.stopPropagation();
    const getCategory = {
      categoryId,
      category,
    };
    dispatch(getJavascriptCategoryId(getCategory));
  };
  return (
    <>
      {topics.map((topic) => (
        <Container key={topic._id}>
          <Toggle title={topic.name}>
            {categories
              .filter((category) => category.topicId === topic._id)
              .map((category) => (
                <Categories key={category._id}>
                  <Header3
                    onClick={(e) =>
                      categoryClick(e, category._id, category.name)
                    }
                  >
                    {category.name}
                  </Header3>
                </Categories>
              ))}
          </Toggle>
        </Container>
      ))}
    </>
  );
};

export default Topic;
