import { url } from '../Utilities';

const contractOwner = (userId, page, pageSize, status) => (
    fetch(`${url}/contract/getcontracts.php?user_id=${userId}&page=${page}&page_size=${pageSize}&status=${status}`) // eslint-disable-line 
        .then(res => res.json())
        .catch(err => console.log(err))
);

export default contractOwner;
