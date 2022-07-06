import fetch from 'node-fetch';
import { MICROSERVICIES, BASE_HEADERS } from '../../constants';
import { IToken, IID, IAlbumInputBase, IAlbumInputFull, IAlbumOutput } from '../../types';
import { getArtistsById, getBandsById, getTracksById, getGenresById } from '../../heplers/helpers';

const albumsQueryResolver = {
    async getAlbums () {
        const response = await fetch(MICROSERVICIES.ALBUMS, {method: 'GET'});
        const data = await response.json();

        const outputFull = data.items.map(async (item: IAlbumInputFull): Promise<IAlbumOutput> => {
            const { artistsIds, bandsIds, tracksIds, genresIds } = item;

            const output: IAlbumOutput = {
                id: item.id,
                name: item.name,
                released: item.released,
                image: item.image,
                artists: artistsIds.length ? await getArtistsById(artistsIds) : [],
                bands: bandsIds.length ? await getBandsById(bandsIds) : [],
                tracks: tracksIds.length ? await getTracksById(tracksIds) : [],
                genres: genresIds.length ? await getGenresById(genresIds) : []
            };

            return output;
        });
    
        return outputFull;
    },
    async getAlbum (_: null, { id }: IID) {
        const response = await fetch(`${MICROSERVICIES.ALBUMS}${id}`, { method: 'GET' });
        const data = await response.json();

        const { artistsIds, bandsIds, tracksIds, genresIds } = data;

        const output: IAlbumOutput = {
            id: data.id,
            name: data.name,
            released: data.released,
            image: data.image,
            artists: artistsIds.length ? await getArtistsById(artistsIds) : [],
            bands: bandsIds.length ? await getBandsById(bandsIds) : [],
            tracks: tracksIds.length ? await getTracksById(tracksIds) : [],
            genres: genresIds.length ? await getGenresById(genresIds) : []
        };

        return output;
    }
};

const albumsMutationResolver = {
    async createAlbum (_: null, { name, released, artistsIds, bandsIds, tracksIds, genresIds, image }: IAlbumInputBase, { token }: IToken ) {
        const albumData = { 
            name, 
            released, 
            artistsIds: artistsIds || [], 
            bandsIds: bandsIds || [],  
            tracksIds: tracksIds || [],  
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

        return data;
    },
    async updateAlbum (_: null, { id, name, released, artistsIds, bandsIds, tracksIds, genresIds, image }: IAlbumInputFull, { token }: IToken ) {
       const albumData = { 
            id,
            name, 
            released, 
            artistsIds: artistsIds || [], 
            bandsIds: bandsIds || [],  
            tracksIds: tracksIds || [],  
            genresIds: genresIds || [],  
            image 
        };
        console.log(albumData);

        const requestOptions = {
            method: 'PUT',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
            body: JSON.stringify(albumData),
        };
    
        const response = await fetch(`${MICROSERVICIES.ALBUMS}${id}`, requestOptions);
        const data = await response.json();

        return data;
    },
    async deleteAlbum (_: null, { id }: IID, { token }: IToken ) {
        const requestOptions = {
            method: 'DELETE',
            headers: { ...BASE_HEADERS, Authorization: `Bearer ${token}`},
        };
    
        const response = await fetch(`${MICROSERVICIES.ALBUMS}${id}`, requestOptions);
        const data = await response.json();

        return data;
    } 
};

export { albumsQueryResolver, albumsMutationResolver };
