import fetch from 'node-fetch';
import { MICROSERVICIES, BASE_HEADERS } from '../../constants';

const usersMutationResolver = {
    async register (_: null, { firstName, lastName, password, email }: { firstName: string, lastName: string, password: string, email: string }) {
        const userData = {firstName, lastName, password, email};
          
        const requestOptions = {
            method: 'POST',
            headers: BASE_HEADERS,
            body: JSON.stringify(userData),
        };
    
        const response = await fetch(MICROSERVICIES.REGISTER, requestOptions);
        const data = await response.json();
    
        return data;
    }
}

export  { usersMutationResolver };
