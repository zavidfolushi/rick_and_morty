import React, { useEffect } from 'react';
import MainContainer from '../components/MainContainer';
import { useNavigate, useParams } from 'react-router-dom';
import EpisodeCard from '../components/episodecard/EpisodeCard';
import { IEpisode } from '../models/models';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchCharacter } from '../store/rickandmorty/charactersSlice';

const CharactersDetailPage = () => {

    const { id = "0" } = useParams();
    const navigate = useNavigate()

    const dispatch = useAppDispatch();
    const characterData = useAppSelector(state => state.charactersSlice.active);

    useEffect(() => {
        dispatch(fetchCharacter(id));
    }, [])

    return (
        <MainContainer>
            <div className='container mx-auto pt-10 pb-10'>
                <div className='mb-10 border-2 border-black w-fit px-2' style={{ cursor: 'pointer' }} onClick={() => navigate(`/`)} >
                    <h2> ← back.</h2>
                </div>
                <div className='flex'>
                    <div className='border-2 border-black flex justify-center '>
                        <img src={characterData?.image} alt={characterData?.name} />
                    </div>
                    <div className='ml-10'>
                        <h1 className='text-4xl text-center mb-5'>{characterData?.name}</h1>
                        {characterData?.gender && <h3><b>Gender:</b> {characterData?.gender}</h3>}
                        {characterData?.species && <h3><b>Species:</b> {characterData?.species}</h3>}
                        {characterData?.type && <h3><b>Type:</b> {characterData?.type}</h3>}
                        {characterData?.origin.name && <h3><b>Origin:</b> {characterData?.origin.name}</h3>}
                        {characterData?.location.name && <h3><b>Location:</b> {characterData?.location.name}</h3>}
                    </div>
                </div>
                <h2 className='text-4xl mb-5 mt-7'>Appearance</h2>
                <div className="grid auto-rows-max grid-cols-5 gap-6">
                    {characterData?.episode?.map((episode) => {
                        episode = episode as IEpisode;

                        return (
                            <EpisodeCard key={episode.id} episode={episode} />
                        )
                    })}
                </div>
            </div>
        </MainContainer>
    );
};

export default CharactersDetailPage;