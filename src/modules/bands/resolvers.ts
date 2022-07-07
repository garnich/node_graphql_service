import fetch from 'node-fetch';
import { MICROSERVICIES, BASE_HEADERS } from '../../constants';
import { IToken, IID, IArtistBase, IArtistFull, IBandBase, IBandBaseFull } from '../../types';
import { getArtistsById, getGenresById, getBandData } from '../../services/services';

const bandsQueryResolver = {
    async getBands () {
        const response = await fetch(MICROSERVICIES.BANDS, {method: 'GET'});
        const data = await response.json();

        return await Promise.all(data.items.map(async(item: any) => {
            return await getBandData(item)
        }));
    },
    async getBand (_: null, { id }: IID) {
        const response = await fetch(`${MICROSERVICIES.BANDS}${id}`, { method: 'GET' });
        const data = await response.json();

        return await getBandData(data)
    }
};

const bandsMutationResolver = {
    async createBand (_: null, { name, origin, members, website, genres }: IBandBase, { token }: IToken ) {
        const bandData = { name, origin, members, website, genres };

        const requestOptions = {
            method: 'POST',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
            body: JSON.stringify(bandData),
        };
    
        const response = await fetch(MICROSERVICIES.BANDS, requestOptions);
        const data = await response.json();
        const outputData = {
            ...data,
            id: data._id
        }
        delete outputData._id;
        
        return outputData;
    },
    async updateBand (_: null, { id, name, origin, members, website, genres }: IBandBaseFull, { token }: IToken ) {
        const bandtData = { name, origin, members, website, genres};
        console.log('bandtData', bandtData);
        const requestOptions = {
            method: 'PUT',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
            body: JSON.stringify(bandtData),
        };
    
        const response = await fetch(`${MICROSERVICIES.BANDS}${id}`, requestOptions);
        const data = await response.json();

        const outputData = {
            ...data,
            id: data._id
        }
        delete outputData._id;

        return outputData;
    },
    async deleteBand (_: null, { id }: IID, { token }: IToken ) {
        const requestOptions = {
            method: 'DELETE',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
        };
    
        const response = await fetch(`${MICROSERVICIES.BANDS}${id}`, requestOptions);
        const data = await response.json();

        return data;
    } 
};

export { bandsQueryResolver, bandsMutationResolver };
