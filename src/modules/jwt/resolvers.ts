import fetch from 'node-fetch';
import { MICROSERVICIES, BASE_HEADERS } from '../../constants';

const jwtQueryResolver = {
    async getJwt (_: null, { email, password }: { email: string, password: string }) {
        const userData = { email, password };
          
        const requestOptions = {
            method: 'POST',
            headers: BASE_HEADERS,
            body: JSON.stringify(userData),
        };
    
        const response = await fetch(MICROSERVICIES.USERS, requestOptions);
        const data = await response.json();

        return data
    }
};

export { jwtQueryResolver };
