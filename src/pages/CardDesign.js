import React from 'react';
import styled from 'styled-components';




const Card = styled.div`
  width: 300px;
   height: 100px;
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
 
  border-radius: 20px;
  background-color: #eeeeee;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  margin:10px;
  margin-bottom: 30px;
  padding: 30px;
  img {
    max-width: 100%;
  }
`;


//const CardModified = styled(Card)`box-shadow: 0px 0px 0px;`;

export default Card;