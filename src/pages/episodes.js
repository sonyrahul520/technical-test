import React, { useState, useEffect } from 'react'
import Moment from 'moment';
import Card  from './CardDesign.js';
import ModalNew from './modal.js';
import Container from './container.js';
import styled from 'styled-components';


const CardModified = styled(Card)`box-shadow: 0px 0px 0px;
height: auto;
width: 300px;`;

export default function Episodes(id) {


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [episodeData, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/shows/7825/episodes')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(true);

                }
            )
    }, [])
    if (error) {
        return <div>Error = {error.message}</div>

    }
    else if (!isLoaded) {
        return <div>Loading</div>
    }
    else {


        return (
            <>
                
                    {episodeData.map(value => (

                        <div key={value.id}>

                            <CardModified >
                                    <b>Episode:{value.name} </b><br />

                                    season:{value.season} <br />
                                    {value.summary}< br/>
                                    date: {Moment(value.airdate).format("DD-MM-YYYY")}<br />

                                </CardModified>


                            

                        </div>
                    ))
                    }
                
               
                
            </>

        );
    }
}