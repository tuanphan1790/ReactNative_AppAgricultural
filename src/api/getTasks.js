import { url, pageSize } from '../Utilities';

const listTasks = (userId, pageNumber, dateStart) => {
    // fetch(`${url}/fucommand/getbyperformer.php?user_id=${userId}&page=${pageNumber}&page_size=${pageSize}&date_start=${dateStart}`) // eslint-disable-line 
    //     .then(res => res.json())
    //     .catch(err => console.log(err))

    return _listTasks = [
        {
            "data": [1],
            "total": "1",
            "current": "1",
            "success": true
        },
        {
            "data": [2],
            "total": "2",
            "current": "2",
            "success": true
        }
    ]
};
;



export default listTasks;
