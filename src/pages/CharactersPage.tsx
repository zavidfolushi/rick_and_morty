import React, { FC, useEffect, useState } from 'react';
import MainContainer from '../components/MainContainer';
import { useGetAllCharactersInfoQuery } from '../store/rickandmorty/rickandmorty.api';
import CharacterCard from '../components/charactercard/CharacterCard';
import { useDebounce } from '../hooks/debounce';
import ReactPaginate from 'react-paginate';
import { IFilter } from '../models/models';
import Loader from '../components/loader/Loader';
const CharactersPage: FC = () => {

    const [search, setSearch] = useState('')
    const [pages, setPages] = useState(0)
    const [selectedPage, setSelectedPage] = useState(1)
    const [status, setStatus] = useState('')
    const [isActive, setIsActive] = useState(false)
    const debounced = useDebounce(search)

    const { data, isLoading, isError } = useGetAllCharactersInfoQuery({ name: debounced, page: selectedPage, status: status })

    useEffect(() => {
        setSelectedPage(1)
        if (data?.info.pages !== undefined) {
            setPages(data?.info.pages)
        }
    }, [debounced, status, data?.info.pages])

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
                        placeholder='Search characters...'
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <div className='flex'>
                        <button className='px-2 border-1' onClick={() => setStatus('')}>All</button>
                        <button className='px-2 border-1' onClick={() => setStatus('alive')}>Alive</button>
                        <button className='px-2 border-1' onClick={() => setStatus('dead')}>Dead</button>
                        <button className='px-2 border-1' onClick={() => setStatus('unknown')}>Unknown</button>
                    </div>
                </div>
                {isLoading && <Loader />}
                {isError && <h1 className='text-4xl text-center'>Ooops...</h1>}
                {!isError &&
                    <div className="grid auto-rows-max grid-cols-5 gap-6">
                        {data?.results.map(character => (
                            <CharacterCard key={character.id} character={character} />
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

export default CharactersPage;