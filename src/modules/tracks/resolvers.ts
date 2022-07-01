import fetch from 'node-fetch';
import { MICROSERVICIES, BASE_HEADERS } from '../../constants';
import { IToken, IID, ITrackBase, ITrackFull } from '../../types';

const tracksQueryResolver = {
    async getTracks () {
        const response = await fetch(MICROSERVICIES.TRACKS, {method: 'GET'});
        const data = await response.json();

        return data.items
    },
    async getTrack (_: null, { id }: IID) {
        const response = await fetch(`${MICROSERVICIES.TRACKS}${id}`, { method: 'GET' });
        const data = await response.json();

        return data
    }
};

const tracksMutationResolver = {
    async createTrack (_: null, { title, albumId, bandsIds, duration, released, genresIds }: ITrackBase, { token }: IToken ) {
        const trackData = { title, albumId, bandsIds, duration, released, genresIds };

        const requestOptions = {
            method: 'POST',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
            body: JSON.stringify(trackData),
        };
    
        const response = await fetch(MICROSERVICIES.TRACKS, requestOptions);
        const data = await response.json();

        return data;
    },
    async updateTrack (_: null, { id, title, albumId, bandsIds, duration, released, genresIds }: ITrackFull, { token }: IToken ) {
        const trackData = { title, albumId, bandsIds, duration, released, genresIds };

        const requestOptions = {
            method: 'PUT',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
            body: JSON.stringify(trackData),
        };
    
        const response = await fetch(`${MICROSERVICIES.TRACKS}${id}`, requestOptions);
        const data = await response.json();

        return data;
    },
    async deleteTrack (_: null, { id }: IID, { token }: IToken ) {
        const requestOptions = {
            method: 'DELETE',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
        };
    
        const response = await fetch(`${MICROSERVICIES.TRACKS}${id}`, requestOptions);
        const data = await response.json();

        return data;
    } 
};

export { tracksQueryResolver, tracksMutationResolver };
