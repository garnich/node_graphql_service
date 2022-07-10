import fetch from 'node-fetch';
import { MICROSERVICIES, BASE_HEADERS } from '../../constants';
import { IToken, IID, IAlbumInputBase, IAlbumInputFull, IIDInput } from '../../types';
import { getAlbumData } from '../../services/services';

const albumsQueryResolver = {
    async getAlbums () {
        const response = await fetch(MICROSERVICIES.ALBUMS, {method: 'GET'});
        const data = await response.json();

        const output =  await Promise.all(data.items.map(async(item: any) => {
            return await getAlbumData(item)
        }));

        return output
    },
    async getAlbum (_: null, { id }: IID) {
        const response = await fetch(`${MICROSERVICIES.ALBUMS}${id}`, { method: 'GET' });
        const data = await response.json();

        return await getAlbumData(data);
    }
};

const albumsMutationResolver = {
    async createAlbum (_: null, { name, released, artistsIds, bandsIds, trackIds, genresIds, image }: IAlbumInputBase, { token }: IToken ) {
        const albumData = { 
            name, 
            released, 
            artistsIds: artistsIds || [], 
            bandsIds: bandsIds || [],  
            tracksIds: trackIds || [],  
            genresIds: genresIds || [],  
            image 
        };
        
        const requestOptions = {
            method: 'POST',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
            body: JSON.stringify(albumData),
        };
    
        const response = await fetch(MICROSERVICIES.ALBUMS, requestOptions);
        const data = await response.json();

        return await getAlbumData(data);
    },
    async updateAlbum (_: null, { _id, name, released, artistsIds, bandsIds, trackIds, genresIds, image }: IAlbumInputFull, { token }: IToken ) {
       const albumData = { 
            _id,
            name, 
            released, 
            artistsIds: artistsIds || [], 
            bandsIds: bandsIds || [],  
            tracksIds: trackIds || [],  
            genresIds: genresIds || [],  
            image 
        };

        const requestOptions = {
            method: 'PUT',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
            body: JSON.stringify(albumData),
        };
    
        const response = await fetch(`${MICROSERVICIES.ALBUMS}${_id}`, requestOptions);
        const data = await response.json();

        return await getAlbumData(data);
    },
    async deleteAlbum (_: null, { _id }: IIDInput, { token }: IToken ) {
        const requestOptions = {
            method: 'DELETE',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
        };
    
        const response = await fetch(`${MICROSERVICIES.ALBUMS}${_id}`, requestOptions);
        const data = await response.json();

        return data;
    } 
};

export { albumsQueryResolver, albumsMutationResolver };
