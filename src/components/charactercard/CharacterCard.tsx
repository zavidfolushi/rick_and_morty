import React, { FC } from 'react';
import { ICharacter } from '../../models/models';
import cn from 'classnames'
import styles from './CharacterCard.module.scss'
import { Link } from 'react-router-dom';

interface CharacterhProps {
    character: ICharacter;
}

const CharacterCard: FC<CharacterhProps> = ({ character }) => {
    return (
        <Link to={`/character/${character.id}`}>
            <div className={cn(styles.char__card, 'shadow-md')}>
                <div className={styles.char__img}>
                    <img src={character.image} alt={character.name} />
                </div>
                <div className={styles.char__name}>
                    <h2>
                        {character.name}
                    </h2>
                </div>
            </div>
        </Link>
    );
};

export default CharacterCard;