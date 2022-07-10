import fetch from 'node-fetch';
import { MICROSERVICIES, BASE_HEADERS } from '../../constants';
import { IToken, IFavouriteInput } from '../../types';
import { getFavouritesData } from '../../services/services';

const favouritesQueryResolver = {
    async getFavourites (_: null, data: null, { token }: IToken) {
        const requestOptions = {
            method: 'GET',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
        };
        const response = await fetch(MICROSERVICIES.FAVOURITES.GET, requestOptions);
        const output = await response.json();

        return getFavouritesData(output);;
    },
};

const favouritesMutationResolver = {
    async addToFavourites (_: null, { type, id }: IFavouriteInput, { token }: IToken ) {
        const requestOptions = {
            method: 'PUT',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
            body: JSON.stringify({type, id}),
        };
    
        const response = await fetch(MICROSERVICIES.FAVOURITES.ADD, requestOptions);
        const data = await response.json();
        
        return getFavouritesData(data);
    },
    async removeFromFavourites (_: null, { type, id }: IFavouriteInput, { token }: IToken ) {
        const requestOptions = {
            method: 'PUT',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
            body: JSON.stringify({type, id}),
        };
    
        const response = await fetch(MICROSERVICIES.FAVOURITES.REMOVE, requestOptions);
        const data = await response.json();

        return getFavouritesData(data);
    } 
};

export { favouritesQueryResolver, favouritesMutationResolver };
