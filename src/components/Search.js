import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: 51px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 4px;
  input {
    border: none;
    outline: none;
    font-size: 20px;
    width: 242px;
  }
`;

const SearchIcon = styled(FaSearch)`
  width: 25px;
  height: 25px;
  margin: 0 0.5rem;
`;

const Search = () => {
  return (
    <Container>
      <SearchIcon />
      <input type='text' />
    </Container>
  );
};

export default Search;
