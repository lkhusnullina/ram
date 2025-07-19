import styles from './Cards.module.scss';
import type { ICharacter } from '../../shared/models/ICharacter';
import { LinkCustom } from '../linkCustom/LinkCustom';

interface CardsProps {
  characters: ICharacter[];
}

export const Cards = ({ characters }: CardsProps) => {
  return (
    <div className={styles.cards}>
      {characters.map((character) => (
        <LinkCustom
          to={`/character/${character.id}`}
          className={styles.card__link}
          key={character.id}
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
      ))}
    </div>
  );
};
