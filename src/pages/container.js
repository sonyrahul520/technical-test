import styled from 'styled-components';




const Container = styled.div`
  
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    margin-left: 100px;
    margin-right: 100px;
    padding-right: 10px;
 

    @media (max-width: 768px) {
    flex-direction: column;
    }
 
`;

export default Container;