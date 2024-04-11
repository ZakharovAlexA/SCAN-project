import { useEffect, useState } from 'react';
import { instance } from './api.config';
import getRequestData from '../components/getRequestData';
import apiGetDocsIds from '../api/api.getDocsIds';
import apiGetDocuments from '../api/api.getDocuments';

function ApiObjectSearch(dataIn) {
    const data = dataIn.dataIn;
    const tempData = getRequestData(data);
    const dataDocsIds = apiGetDocsIds(tempData);

    const [dataId, setDataId] = useState(null);

    const mapDocumentsIds = (dataDocsIds) => {
        dataDocsIds.map((dataDoc) => {
            try {
                setDataId({ ids: [dataDoc['encodedId']] });
                apiGetDocuments(dataId);
            } catch (error) {
                console.error('ObjectsearchHist failed');
            }
        });
        console.log('DATA_IDS____', dataId);
    };
    useEffect(() => {
        const callDocumentsIds = async () => {
            try {
                mapDocumentsIds(dataDocsIds);
            } catch (error) {
                console.error('ObjectsearchHist failed');
            }
        };
        callDocumentsIds();
    });
}

export default ApiObjectSearch;
