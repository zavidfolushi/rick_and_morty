import React, { useEffect } from 'react';
import MainContainer from '../components/MainContainer';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchEpisode } from '../store/rickandmorty/episodesSlice';
import { ICharacter } from '../models/models';
import CharacterCard from '../components/charactercard/CharacterCard';

const EpisodeDetailPage = () => {


    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const { id = "0" } = useParams();

    const episodeData = useAppSelector(state => state.episodesSlice.active);

    useEffect(() => {
        dispatch(fetchEpisode(id));
    }, [])

    return (
        <MainContainer>

            <div className='container mx-auto pt-10 pb-10'>
                <div className='mb-10 border-2 border-black w-fit px-2' style={{ cursor: 'pointer' }} onClick={() => navigate(`/episodes`)} >
                    <h2> ← back.</h2>
                </div>
                <div className='flex'>
                    <div className='flex justify-center '>
                        {episodeData?.episode}
                    </div>
                    <div className='ml-10'>
                        <h1 className='text-5xl mb-5'>{episodeData?.name}</h1>
                        {episodeData?.air_date && <h3><b> Air date:</b> {episodeData?.air_date}</h3>}
                    </div>
                </div>
                <h2 className='text-4xl mb-5 mt-7'>Appeared in the series</h2>
                <div className="grid auto-rows-max grid-cols-5 gap-6">
                    {episodeData?.characters?.map((character) => {
                        character = character as ICharacter;
                        return (
                            <CharacterCard character={character} />
                        )
                    })}
                </div>
            </div>
        </MainContainer>
    );
};

export default EpisodeDetailPage;