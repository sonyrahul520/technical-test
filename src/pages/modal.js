import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from './container.js';
import Episodes from './episodes.js';

const Modalstyle = styled.div`
position: fixed;
  z-index: 10;
  background: #fff;
  width: 700px;
   height: auto;
    border-radius: 10px;
    top:0;
    left:0;
    transform: translate(-50%, -200px);
    padding: 10px;
    line-height: 1.5
    
`;

const Overlay = styled.div`
 width: auto;
  height: auto;
  background-color: rgba(238,238,238,.3);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 0;
   transform: translate(-50%, -50%);
`;


export default function ModalNew(props) {

    const [id, setId] = useState(props.passData);
    const [episodeData, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    
        return (

            <>

                <Overlay onClick={() => { props.setModalOpen(false) }}>
                    <Modalstyle>

                        <b> {props.titleData}</b> <br />
                            {props.summary}
                            <Episodes />
                       
                    </Modalstyle>
                   
                </Overlay >
            </>
        );

    
  
}

