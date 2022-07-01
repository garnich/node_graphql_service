interface IToken {
    token: string;
}

interface IID {
    id: string;
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

  export { IToken, IID, IArtistBase, IArtistFull, ITrackBase, ITrackFull };
