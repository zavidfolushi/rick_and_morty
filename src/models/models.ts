export interface IAllCharacters<T> {
  info: IInfo
  results: T[]
}

export interface IInfo {
  count: number
  pages: number
  next: string
  prev: any
}

export interface ICharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: IOrigin
  location: ILocation
  image: string
  episode: string[] | IEpisode[]
  url: string
  created: string
}


export interface IOrigin {
  name: string
  url: string
}

export interface ILocation {
  name: string
  url: string
}


export interface IEpisode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[] | ICharacter[]
  url: string
  created: string
}

export interface IFilter {
  name?: string
  status?: string
  page?: number
}
