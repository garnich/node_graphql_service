import fetch from 'node-fetch';
import { MICROSERVICIES, BASE_HEADERS, TOKENT_STORE_WITHOUT_FRONT } from '../../constants';

const jwtQueryResolver = {
    async getJwt (_: null, { email, password }: { email: string, password: string }) {
        const userData = { email, password };
          
        const requestOptions = {
            method: 'POST',
            headers: BASE_HEADERS,
            body: JSON.stringify(userData),
        };
    
        const response = await fetch(MICROSERVICIES.USERS.LOGIN, requestOptions);
        const data = await response.json();

        TOKENT_STORE_WITHOUT_FRONT.token = data.jwt;

        return data
    }
};

export { jwtQueryResolver };
