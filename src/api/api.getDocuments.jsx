import React, { useState, useEffect } from 'react';
import { instance } from './api.config';

function ApiGetDocuments(dataId) {
    const [respDoc, setRespDoc] = useState(null);

    useEffect(() => {
        const getDocuments = async () => {
            try {
                await instance
                    .post('/api/v1/documents', dataId)
                    .then((respDocs) => {
                        setRespDoc(respDocs.data['ok']);
                        console.log(respDoc);
                    });
            } catch (error) {
                console.error('DataDocuments failed');
            }
        };
        getDocuments();
    }, []);

    return <div></div>;
}

export default ApiGetDocuments;
