import { useState, useEffect } from 'react';
import { instance } from '../api/api.config';
import '../styles/InfoPanel.css';
import Spinner from './Spinner';

function InfoPanel() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [eventFiltersInfo, setEventFiltersInfo] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoaded(false);
            try {
                const response = await instance.get('/api/v1/account/info');
                setEventFiltersInfo(response.data.eventFiltersInfo);
            } catch (error) {
                console.log({ error });
            } finally {
                setIsLoaded(true);
            }
        };
        fetchData();
    }, []);

    console.log('usedCompanyCount:', eventFiltersInfo.usedCompanyCount);
    console.log('companyLimit:', eventFiltersInfo.companyLimit);

    if (!isLoaded) {
        return <Spinner />;
    } else {
        return (
            <>
                <div className='infoText'>
                    <p>Исрользовано компаний </p>
                    <p>Лимит по компаниям </p>
                </div>
                <div className='infoCounts'>
                    <p className='usedCompanyCount'>
                        {eventFiltersInfo.usedCompanyCount}
                    </p>
                    <p className='companyLimit'>
                        {eventFiltersInfo.companyLimit}
                    </p>
                </div>
            </>
        );
    }
}

export default InfoPanel;
