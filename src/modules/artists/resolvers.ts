import fetch from 'node-fetch';
import { MICROSERVICIES, BASE_HEADERS } from '../../constants';
import { getArtistData } from '../../services/services';
import { IToken, IID, IArtistBase, IArtistFull } from '../../types';

const artistsQueryResolver = {
    async getArtists () {
        const response = await fetch(MICROSERVICIES.ARTIST, {method: 'GET'});
        const data = await response.json();

        const output =  await Promise.all(data.items.map(async(item: any) => {
            return await getArtistData(item)
        }));

        return output
    },
    async getArtist (_: null, { id }: IID) {
        const response = await fetch(`${MICROSERVICIES.ARTIST}${id}`, { method: 'GET' });
        const data = await response.json();

        return await getArtistData(data)
    }
};

const artistsMutationResolver = {
    async createArtist (_: null, { firstName, secondName, middleName, birthDate, birthPlace, country, bands, instruments }: IArtistBase, { token }: IToken ) {
        const artistData = {firstName, secondName, middleName, birthDate, birthPlace, country, bands, instruments};

        const requestOptions = {
            method: 'POST',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
            body: JSON.stringify(artistData),
        };
    
        const response = await fetch(MICROSERVICIES.ARTIST, requestOptions);
        const data = await response.json();
        const output = await getArtistData(data);

        return output;
    },
    async updateArtist (_: null, { id, firstName, secondName, middleName, birthDate, birthPlace, country, bands, instruments }: IArtistFull, { token }: IToken ) {
        const artistData = {firstName, secondName, middleName, birthDate, birthPlace, country, bands, instruments};

        const requestOptions = {
            method: 'PUT',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
            body: JSON.stringify(artistData),
        };
    
        const response = await fetch(`${MICROSERVICIES.ARTIST}${id}`, requestOptions);
        const data = await response.json();
        const output = await getArtistData(data);

        return output;
    },
    async deleteArtist (_: null, { id }: IID, { token }: IToken ) {
        const requestOptions = {
            method: 'DELETE',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
        };
    
        const response = await fetch(`${MICROSERVICIES.ARTIST}${id}`, requestOptions);
        const data = await response.json();

        return data;
    } 
};

export { artistsQueryResolver, artistsMutationResolver };
