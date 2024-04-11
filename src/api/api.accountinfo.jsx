import { instance } from './api.config';
import { useState } from 'react';

function AccountInfo() {
    const [usedCompanyCount, setUsedCompanyCount] = useState('0');
    const [companyLimit, setCompanyLimit] = useState('0');
    try {
        instance.get('/api/v1/account/info').then((resp) => {
            setUsedCompanyCount(resp.data.eventFiltersInfo.usedCompanyCount);
            setCompanyLimit(resp.data.eventFiltersInfo.companyLimit);

            console.log('count', usedCompanyCount, 'limit', companyLimit);
        });
    } catch (error) {
        console.error('AccountInfo failed');
    }
}

export default AccountInfo();
