import React, { FC, useEffect, useState } from 'react';
import MainContainer from '../components/MainContainer';
import EpisodeCard from '../components/episodecard/EpisodeCard';
import ReactPaginate from 'react-paginate';
import { useDebounce } from '../hooks/debounce';
import { useGetAllEpisodesInfoQuery } from '../store/rickandmorty/rickandmorty.api';
import Loader from '../components/loader/Loader';

const EpisodesPage: FC = () => {

    const [search, setSearch] = useState('')
    const [pages, setPages] = useState(0)
    const [selectedPage, setSelectedPage] = useState(1)
    const debounced = useDebounce(search)

    const { data, isLoading, isError } = useGetAllEpisodesInfoQuery({ name: debounced, page: selectedPage })

    useEffect(() => {
        setSelectedPage(1)
        if (data?.info.pages !== undefined) {
            setPages(data?.info.pages)
        }
    }, [debounced, data?.info.pages])

    const handlePageClick = (page: any) => {
        setSelectedPage(page.selected + 1)
        console.log(selectedPage)
    }





    return (
        <MainContainer>
            <div className='container mx-auto pt-10 pb-10'>
                <div className='w-full flex mb-6 justify-between'>
                    <input
                        type="text"
                        className='border py-2 px-4 h-[42px]'
                        placeholder='Search epiode...'
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                {isLoading && <Loader />}
                {isError && <h1 className='text-4xl text-center'>Ooops...</h1>}
                {!isError &&
                    <div className="grid auto-rows-max grid-cols-5 gap-6">
                        {data?.results.map(episode => (
                            <EpisodeCard key={episode.id} episode={episode} />
                        ))}
                    </div>}
                {data && !isError &&
                    <ReactPaginate
                        pageCount={pages}
                        previousLabel={'Prev'}
                        nextLabel={'Next'}
                        onPageChange={handlePageClick}
                        containerClassName={'list-style-none flex mx-auto mt-6'}
                        previousLinkClassName={'relative block  bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400'}
                        nextLinkClassName={'relative block  bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white'}
                        disabledClassName={'pointer-events-none'}
                        pageLinkClassName={'relative block border-2 border-transparent bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white'}
                        activeClassName={'relative block  bg-transparent border-2 border-black'}
                        breakLinkClassName={'relative block  bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white'}
                    />
                }
            </div>
        </MainContainer>
    );
};

export default EpisodesPage;