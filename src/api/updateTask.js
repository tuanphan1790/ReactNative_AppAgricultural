import { url } from '../Utilities';

const timeNow = new Date();
const updateTask = (fu_command_id) => (
    fetch(`${url}/fucommand/setdatetimecomplete`, // eslint-disable-line 
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ fu_command_id, timeNow })
    })
    .then(res => res.json())
);

export default updateTask;
