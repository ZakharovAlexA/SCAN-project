import React, { useEffect, useState } from 'react';
import { instance } from './api.config';

function ApiGetDocsIds(tempData) {
    const [dataObjects, setDataObjects] = useState(null);

    useEffect(() => {
        const getDocsIds = async () => {
            try {
                await instance
                    .post('/api/v1/objectsearch', tempData)
                    .then((resp) => {
                        const dataresp = resp.data['items'];
                        setDataObjects(dataresp);
                    });
            } catch (error) {
                console.error('DataOjects failed');
            }
        };
        getDocsIds();
    }, []);

    return dataObjects;
}

export default ApiGetDocsIds;
