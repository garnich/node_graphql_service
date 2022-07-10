import fetch from 'node-fetch';
import { MICROSERVICIES } from '../constants';
import { IBandBaseFullImport, IFavouritesOutputData, ITrackFull, IAlbumInputFull, IAlbumOutput, IArtistFull,
    IArtistInputFull, 
    IGenreFullInput,
    IGenreFull} from '../types';

const getAlbumById = async (albumId: string) => {
    const response = await fetch(`${MICROSERVICIES.ALBUMS}${albumId}`, { method: 'GET' });
    const data = await response.json();
    
    return data;
};

const getArtistsById = async (artistsIds: string[]) => {
    return await Promise.all(artistsIds.map(async (artist: string) => {
        const response = await fetch(`${MICROSERVICIES.ARTIST}${artist}`, { method: 'GET' });
        const data = await response.json();
        
        return data.item ? await getArtistData(data.item) : await getArtistData(data);
    }))
};

const getBandsById = async (bandsIds: string[]):Promise<any[]> => {
    return await Promise.all(bandsIds.map(async (band: string) => {
        const response = await fetch(`${MICROSERVICIES.BANDS}${band}`, { method: 'GET' });
        const data = await response.json();
        
        return await getBandData(data);
    }))
};

const getTracksById = async (trackIds: string[]): Promise<any[]> => {
    return await Promise.all(trackIds.map(async (track: string) => {
        const response = await fetch(`${MICROSERVICIES.TRACKS}${track}`, { method: 'GET' });
        const data = await response.json();

        return await getTrackData(data)
    }))
};

const getGenresById = async (genresIds: string[]) => {
    return await Promise.all(genresIds.map(async (genre: string) => {
        const response = await fetch(`${MICROSERVICIES.GENRES}${genre}`, { method: 'GET' });
        const data = await response.json();
        
        return getGenreData(data)
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

const getFavouritesData = async (data: IFavouritesOutputData) => {
    const { _id, userId, bandsIds, genresIds, artistsIds, tracksIds } = data;

    return {
        id: _id,
        userId: userId,
        bands: bandsIds.length ? await getBandsById(bandsIds) : [],
        genres: genresIds.length ? await getGenresById(genresIds) : [],
        artists: artistsIds.length ? await getArtistsById(artistsIds) : [],
        tracks: tracksIds.length ? await getTracksById(tracksIds) : []
    }
};

const getTrackData = async (trackData: ITrackFull) => {
    const { _id: id,  title, albumId, bandsIds, duration, released, genresIds } = trackData;
    
    const output = {
       id,
       title,
       albums: albumId ? await getAlbumById(albumId) : null,
       bands: bandsIds.length ? await getBandsById(bandsIds) : [], 
       duration,
       released,
       genres: genresIds.length ? await getGenresById(genresIds) : [],
    };
    
    return output
};

const getTracksData = async (trackData: ITrackFull[]) => {
    return await Promise.all(trackData.map(async (trackData: ITrackFull) => {

    const { _id: id,  title, albumId, bandsIds, duration, released, genresIds } = trackData;

    const output = {
       id,
       title,
       albums: albumId ? await getAlbumById(albumId) : null,
       bands: bandsIds.length ? await getBandsById(bandsIds) : [], 
       duration,
       released,
       genres: genresIds.length ? await getGenresById(genresIds) : [],
    };
    
    return output
    }))
};

const getAlbumData = async (album: IAlbumInputFull) => {
    const {_id, name, released, image, artistsIds, bandsIds, trackIds, genresIds } = album;
    
    const output: IAlbumOutput = {
        id: _id,
        name,
        released,
        image,
        artists: artistsIds.length ? await getArtistsById(artistsIds) : [],
        bands: bandsIds.length ? await getBandsById(bandsIds) : [],
        tracks: trackIds.length ? await getTracksById(trackIds) : [],
        genres: genresIds.length ? await getGenresById(genresIds) : []
    };

    return output;
};

const getArtistData = async (artist: IArtistInputFull) => {
    const {_id, firstName, secondName, middleName, birthDate, birthPlace, country, bandsIds, instruments } = artist;

    const output: IArtistFull = {
        id: _id,
        firstName,
        secondName,
        middleName,
        birthDate,
        birthPlace,
        country,
        instruments,
        bands: bandsIds.length ? await getBandsById(bandsIds) : []
    };

    return output;
};

const getGenreData = async (genreData: IGenreFullInput) => {
    const {_id, name, description, country, year } = genreData;

    const output: IGenreFull = {
        id: _id,
        name,
        description,
        country,
        year
    };

    return output;
};


export { getAlbumById, getArtistsById, getBandsById, getTracksById, getGenresById, getBandData, getFavouritesData, getTrackData, getTracksData, getAlbumData, getArtistData, getGenreData };
