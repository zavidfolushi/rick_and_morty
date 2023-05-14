 import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IAllCharacters, ICharacter, IEpisode, IFilter } from '../../models/models'

 export const rickandmortyApi = createApi({
    reducerPath: 'rickandmorty/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api/'
    }),
    endpoints: build => ({
        getAllCharactersInfo: build.query<IAllCharacters<ICharacter>, IFilter>({
            query: ({page = 1, name, status}) => ({
                url: `character`,
                params: {
                    page,
                    name, 
                    status
                }
            }),
        }),
        getCharacterDetail: build.query<ICharacter, number | null>({
            query: (id: number) => ({
                url: `character/${id}`,
            }),
        }),

        getAllEpisodesInfo: build.query<IAllCharacters<IEpisode>, IFilter>({
            query: ({name, page}) => ({
                url: `episode`,
                params: {
                    episode: name,
                    page
                }
            }),
        }),
        getEpisodeDetail: build.query<IEpisode, number | null>({
            query: (id: number) => ({
                url: `episode/${id}`,
            }),
        }),

    })
 })


 export const {useGetAllCharactersInfoQuery, useGetCharacterDetailQuery, useGetAllEpisodesInfoQuery, useGetEpisodeDetailQuery} = rickandmortyApi