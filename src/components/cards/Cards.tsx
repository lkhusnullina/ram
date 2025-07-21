import styles from './Cards.module.scss';
import type { ICharacter } from '../../shared/models/ICharacter';
import { LinkCustom } from '../linkCustom/LinkCustom';
import { Modal } from '../modal/Modal';
import { useState } from 'react';

interface CardsProps {
  characters: ICharacter[];
}

export const Cards = ({ characters }: CardsProps) => {
  const [hoveredCharacter, setHoveredCharacter] = useState<ICharacter | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (character: ICharacter) => {
    setHoveredCharacter(character);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredCharacter(null);
  };

  return (
    <div className={styles.cards}>
      {characters.map((character) => (
        <div key={character.id}
          className={styles.card__wrapper}
          onMouseEnter={() => handleMouseEnter(character)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}>
        <LinkCustom
          to={`/character/${character.id}`}
          className={styles.card__link}
        >
          <div className={styles.card} key={character.id}>
            <img
              className={styles.card__img}
              src={character.image}
              alt="character"
            />
            <div className={styles.card__name}>{character.name}</div>
          </div>
        </LinkCustom>
        </div>
      ))}

      {hoveredCharacter && (
        <Modal
          character={hoveredCharacter}
          position={mousePosition}
        />
      )}
    </div>
  );
};


