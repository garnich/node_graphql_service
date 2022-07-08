interface IToken {
    token: string;
}

interface IID {
    id: string;
}

interface IMember {
    id: string;
    artist: IArtistFull;
    instrument: string;
    years: string;
}

interface IMemberInput {
    id: string;
    artistIds: string[];
    instrument: string;
    years: string;
}

interface IArtistBase {
    firstName: string;
    secondName: string;
    middleName: string;
    birthDate: string;
    birthPlace: string;
    country: string;
    bands: string[];
    instruments: string[];
}

interface IArtistFull extends IArtistBase {
    id: string;
}

interface ITrackBase {
    title: string; 
    albumId: string;
    bandsIds: string[];
    duration: number;
    released: number;
    genresIds: string[];
}

interface ITrackFull extends ITrackBase {
    id: string;
}

interface IGenreBase {
    name: string;
    description: string;
    country: string;
    year: number;
}

interface IGenreFull extends IGenreBase {
    id: string;
}

interface IAlbumInputBase {
    name: string;
    released: number;
    artistsIds: string[];
    bandsIds: string[];
    tracksIds: string[];
    genresIds: string[];
    image: string;
}

interface IAlbumInputFull extends IAlbumInputBase {
    id: string;
}

interface IAlbumOutput {
    id: string;
    name: string;
    released: number;
    artists: IArtistFull[] | [];
    bands: any[];
    tracks: ITrackFull[];
    genres: IGenreFull[];
    image: string;
}

interface IBandBase {
    name: string;
    origin: string;
    members: IMember[];
    website: string;
    genres: IGenreFull[];
}

interface IBandBaseFull extends IBandBase {
    id: string;
}

interface IBandBaseFullImport {
    _id: string;
    name: string;
    origin: string;
    members: IMemberInput[];
    website: string;
    genresIds: string[];
}

interface IFavouriteInput {
    type: 'bands' | 'genres' | 'artists' | 'tracks';
    id: string;
}

interface IFavouritesOutputData {
    _id: string;
  userId: string;
  bandsIds: string[];
  genresIds: string[];
  artistsIds: string[];
  tracksIds: string[];
}

export { 
    IToken, 
    IID, 
    IArtistBase, 
    IArtistFull, 
    ITrackBase, 
    ITrackFull,
    IGenreBase,
    IGenreFull,
    IAlbumInputBase,
    IAlbumOutput,
    IAlbumInputFull,
    IBandBase,
    IBandBaseFull,
    IBandBaseFullImport,
    IMemberInput,
    IFavouriteInput,
    IFavouritesOutputData
};
