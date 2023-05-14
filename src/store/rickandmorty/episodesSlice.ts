import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IEpisode, IInfo } from "../../models/models";


interface IState{
    info: null | IInfo,
    results: IEpisode[],
    active: IEpisode | null,
    error: null | any
}

const initialState: IState = {
    info: null,
    results: [],
    active: null,
    error: null
}

export const fetchEpisode = createAsyncThunk(
    'fetchEpisode',
    async (id: string) => {
        let promises: any = [];
        let characters: any = [];

        const data = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
            .then( response => response.json())
            .then(json => {
                promises = json.characters.map( (url: string) => {
                    const promise = fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            characters.push(data)
                        })
                    return promise
                })
                return json
            })
            
        return await Promise.all(promises)
            .then( () => {
                data.characters = characters;
                return data
            })
    }
)

const episodesSlice = createSlice({
    name: "episodesSlice",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            fetchEpisode.fulfilled, (state, action) => {
                state.active = action.payload;
            }
        )
    },
});

export default episodesSlice.reducer;