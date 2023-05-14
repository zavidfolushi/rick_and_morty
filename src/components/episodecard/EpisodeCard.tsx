import React, { FC } from 'react';
import { IEpisode } from '../../models/models';
import cn from 'classnames'
import styles from './EpisodeCard.module.scss'
import { Link } from 'react-router-dom';

interface EpisodeProps {
    episode: IEpisode;
}

const EpisodeCard: FC<EpisodeProps> = ({ episode }) => {
    return (
        <Link to={`/episodes/${episode.id}`}>
            <div className={cn(styles.episod__card)}>
                <div className={styles.episod}>
                    {episode.episode}
                </div>
                <div className={styles.episod__name}>{episode.name}</div>
            </div>
        </Link>
    );
};

export default EpisodeCard;