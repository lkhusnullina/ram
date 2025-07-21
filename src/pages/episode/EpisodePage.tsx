import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCharactersByUrls, getEpisodeById } from '../../services/api';

import { ButtonBack, LinkCustom, Preloader } from '../../components';
import type { IEpisode } from '../../shared/models/IEpisode';
import type { ICharacter } from '../../shared/models/ICharacter';
import styles from './EpisodePage.module.scss';

const EpisodePage = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState<IEpisode | null>(null);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadEpisode = async () => {
      if (!id) return;
      try {
        setIsLoading(true);
        const episode = await getEpisodeById(id);
        const characters = await getCharactersByUrls(episode.characters);
        setEpisode(episode);
        setCharacters(characters);
      } catch (error) {
        console.error('Ошибка при загрузке эпизода', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadEpisode();
  }, [id]);

  if (isLoading) {
    return <Preloader />;
  }

  if (!episode) return <div>Эпизод не найден</div>;

  return (
    <div className={styles.episode}>
      <ButtonBack />
      <h2 className={styles.episode__title}>
        Эпизод: №{episode.id} {episode.name}
      </h2>
      <div className={styles.episode__content}>
        <p>Дата выхода: {episode.air_date}</p>
      </div>
      <div className={styles.episode__section}>
        <h4>Персонажи:</h4>
        <div>
          <ul className={styles.episode__characters}>
            {characters.map((character) => (
              <li key={character.id}>
                <LinkCustom to={`/character/${character.id}`}>
                  {character.name}
                </LinkCustom>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EpisodePage;
