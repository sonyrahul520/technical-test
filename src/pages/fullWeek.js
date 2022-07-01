import React, { useState, useEffect } from 'react'
import Moment from 'moment';
import Card from './CardDesign.js';
import ModalNew from './modal.js';
import Container from './container.js';

const box = styled(card)


 export default function Fullshow  () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [scheduleDate, setData] = useState([]);
    const [isOpen, setModalOpen] = useState(false);
     const [passData, setPassData] = useState(null);
     const [titleData, setTitleData] = useState(null);
     const [summary, setSummary] = useState(null);
    useEffect(() => {
        fetch("https://api.tvmaze.com/schedule/full")
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
                <Container>
                {scheduleDate.map(value => (

                    <div key={value.id}>

                        {value.airdate == '2022-07-02'
                            &&

                            <Card onClick={() => {
                            
                                setModalOpen(true); setPassData(value._embedded.show.id);
                            setTitleData(value.name); setSummary(value._embedded.show.summary)
                        }}>
                            <box></box>
                                <div>
                                <b>Episode:{value.name} </b><br />
                            
                                series:{value._embedded.show.name} <br />
                                date: {Moment(value.airdate).format("DD-MM-YYYY")}<br />
                                </div>
                                </Card>
                            

                        }
                      
                    </div>
                ))
                }
                </Container>
                
                {isOpen &&
                    <ModalNew setModalOpen={setModalOpen} passData={passData} titleData={titleData} summary={summary} />}
            </>

        );
    }
}
