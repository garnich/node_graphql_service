import fetch from 'node-fetch';
import { MICROSERVICIES, BASE_HEADERS } from '../../constants';
import { IToken, IID, IGenreBase, IGenreFull, IGenreFullInput, IIDInput } from '../../types';
import { getGenreData } from '../../services/services';

const genresQueryResolver = {
    async getGenres () {
        const response = await fetch(MICROSERVICIES.GENRES, {method: 'GET'});
        const data = await response.json();

        return data.items.map((item: IGenreFullInput) => getGenreData(item))
    },
    async getGenre (_: null, { id }: IID) {
        const response = await fetch(`${MICROSERVICIES.GENRES}${id}`, { method: 'GET' });
        const data = await response.json();

        return getGenreData(data);
    }
};

const genresMutationResolver = {
    async createGenre (_: null, { name, description, country, year }: IGenreBase, { token }: IToken ) {
        const genreData = { name, description, country, year };

        const requestOptions = {
            method: 'POST',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
            body: JSON.stringify(genreData),
        };
    
        const response = await fetch(MICROSERVICIES.GENRES, requestOptions);
        const data = await response.json();

        return getGenreData(data);
    },
    async updateGenre (_: null, { _id, name, description, country, year }: IGenreFullInput, { token }: IToken ) {
        const genreData = { name, description, country, year };

        const requestOptions = {
            method: 'PUT',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
            body: JSON.stringify(genreData),
        };
    
        const response = await fetch(`${MICROSERVICIES.GENRES}${_id}`, requestOptions);
        const data = await response.json();
        console.log('data', data);
        
        return getGenreData(data);
    },
    async deleteGenre (_: null, { _id }: IIDInput, { token }: IToken ) {
        const requestOptions = {
            method: 'DELETE',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
        };
    
        const response = await fetch(`${MICROSERVICIES.GENRES}${_id}`, requestOptions);
        const data = await response.json();

        return data;
    } 
};

export { genresQueryResolver, genresMutationResolver };
