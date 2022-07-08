import fetch from 'node-fetch';
import { MICROSERVICIES } from '../constants';
import { IBandBaseFullImport, IFavouritesOutputData } from '../types';

const getArtistsById = async (artistsIds: string[]) => {
    return await Promise.all(artistsIds.map(async (artist: string) => {
        const response = await fetch(`${MICROSERVICIES.ARTIST}${artist}`, { method: 'GET' });
        const data = await response.json();
        
        return data.item ? data.item : data;
    }))
};

const getBandsById = async (bandsIds: string[]) => {
    return await Promise.all(bandsIds.map(async (band: string) => {
        const response = await fetch(`${MICROSERVICIES.BANDS}${band}`, { method: 'GET' });
        const data = await response.json();
        
        return data
    }))
};

const getTracksById = async (trackIds: string[]) => {
    return await Promise.all(trackIds.map(async (track: string) => {
        const response = await fetch(`${MICROSERVICIES.TRACKS}${track}`, { method: 'GET' });
        const data = await response.json();
        
        return data
    }))
};

const getGenresById = async (genresIds: string[]) => {
    return await Promise.all(genresIds.map(async (genre: string) => {
        const response = await fetch(`${MICROSERVICIES.GENRES}${genre}`, { method: 'GET' });
        const data = await response.json();
        
        return data
    }))
};

const getBandData = async (band: IBandBaseFullImport) => {
        const membersData = await Promise.all(band.members.map(async (member: any) => {
            const artistData = await getArtistsById([member.artistIds]);

            return {
                artist: artistData[0],
                instrument: member.instrument,
                years: member.years
            }
        }));

        const output = {
            id: band._id,
            name: band.name,
            origin: band.origin || '',
            website: band.website || '',
            members: membersData || [],
            genres:  band.genresIds.length ? await getGenresById(band.genresIds) : []
        };

        return output;
};

const getFavouritesData = async (data: IFavouritesOutputData) => (
    {
        id: data._id,
        userId: data.userId,
        bands: data.bandsIds.length ? await getBandsById(data.bandsIds) : [],
        genres: data.genresIds.length ? await getGenresById(data.genresIds) : [],
        artists: data.artistsIds.length ? await getArtistsById(data.artistsIds) : [],
        tracks: data.tracksIds.length ? await getTracksById(data.tracksIds) : []
    }
);

export { getArtistsById, getBandsById, getTracksById, getGenresById, getBandData, getFavouritesData };
