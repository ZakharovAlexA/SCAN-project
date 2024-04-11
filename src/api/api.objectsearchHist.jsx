import { useState, useEffect } from 'react';
import { instance } from './api.config';
import Spinner from '../components/Spinner';
import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider_arrow from '../img/slider-arrow.svg';
import '../styles/Api.objectsearchHist.css';
import getRequestData from '../components/getRequestData';

function ObjectsearchHist(dataIn) {
    const data = dataIn.dataIn;
    const [isLoadedHist, setIsLoadedHist] = useState(false);
    const [dataSearchObjHist, setDataSearchObjHist] = useState([]);

    const tempData = getRequestData(data);

    useEffect(() => {
        const dataSortedHist = [];
        setIsLoadedHist(false);
        const fetchDataHist = async () => {
            try {
                await instance
                    .post('/api/v1/objectsearch/histograms', tempData)

                    .then((resp) => {
                        const dataresp = resp.data.data;
                        const lengthData = dataresp[0]['data'].length;

                        for (let i = 0; i < lengthData; i++) {
                            dataSortedHist.push({
                                id: i,
                                date: dataresp[0]['data'][i]['date'].split(
                                    'T'
                                )[0],
                                valueTotalDocuments:
                                    dataresp[0]['data'][i]['value'],
                                valueRiskFactors:
                                    dataresp[1]['data'][i]['value'],
                            });
                        }
                        setDataSearchObjHist(dataSortedHist);
                    });
            } catch (error) {
                console.error('ObjectsearchHist failed');
            } finally {
                setIsLoadedHist(true);
            }
        };
        fetchDataHist();
    }, []);

    if (isLoadedHist) {
        const settings = {
            infinite: true,
            slidesToShow: 8,
            slidesToScroll: 1,
            nextArrow: (
                <div>
                    <img
                        src={slider_arrow}
                        alt='arrow'
                        className='slickObjHistnextImg'
                    />
                </div>
            ),
            prevArrow: (
                <div>
                    <img
                        src={slider_arrow}
                        alt='arrow'
                        className='slickObjHistprevArrow'
                    />
                </div>
            ),
        };
        return (
            <>
                <div className='slicObjHistContent'>
                    <div className='slickObjHistHeader'>
                        <p className='slickObjHistText'>Период</p>
                        <p className='slickObjHistText'>Всего</p>
                        <p className='slickObjHistText'>Риски</p>
                    </div>
                    <div className='slickObjHistContainer'>
                        <ReactSlick {...settings}>
                            {dataSearchObjHist.map((item) => (
                                <div
                                    className='slickObjHistFrame'
                                    key={item.id}
                                >
                                    <p className='slickObjHistText'>
                                        {item.date}
                                    </p>
                                    <p className='slickObjHistText'>
                                        {item.valueTotalDocuments}
                                    </p>
                                    <p className='slickObjHistText'>
                                        {item.valueRiskFactors}
                                    </p>
                                </div>
                            ))}
                        </ReactSlick>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className='slicObjHistContent'>
                    <div className='slickObjHistHeader'>
                        <p className='slickObjHistText'>Период</p>
                        <p className='slickObjHistText'>Всего</p>
                        <p className='slickObjHistText'>Риски</p>
                    </div>
                    <div className='slickObjHistContainer'>
                        <Spinner />
                    </div>
                </div>
            </>
        );
    }
}

export default ObjectsearchHist;
