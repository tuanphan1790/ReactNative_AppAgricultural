import { url } from '../Utilities';

const signIn = (name, password) => (
    fetch(`${url}/users/login.php`, // eslint-disable-line 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                name,
                password
            })
        })
        .then(res => res.json())
);

module.exports = signIn;

//url = http://agrilink.nisci.gov.vn/users/login