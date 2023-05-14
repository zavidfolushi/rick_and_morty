import React, { FC } from 'react';
import Navigation from './navigation/Navigation';


interface MainContainerProps {
    children: React.ReactNode
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}

        </>
    );
};

export default MainContainer;