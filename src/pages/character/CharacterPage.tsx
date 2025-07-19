import { useParams } from 'react-router-dom';
import type { ICharacter } from '../../shared/models/ICharacter';
import { useEffect, useState } from 'react';
import { getCharacterById, getEpisodesByUrls } from '../../services/api';
import styles from './CharacterPage.module.scss';
import { ButtonBack, LinkCustom, Preloader } from '../../components';
import type { IEpisode } from '../../shared/models/IEpisode';

const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<ICharacter | null>(null);
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCharacter = async () => {
      if (!id) return;
      try {
        setIsLoading(true);
        const character = await getCharacterById(id);
        const episodes = await getEpisodesByUrls(character.episode);
        setCharacter(character);
        setEpisodes(episodes);
      } catch (error) {
        console.error('Ошибка при загрузке персонажа', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadCharacter();
  }, [id]);

  if (isLoading) {
    return <Preloader />;
  }

  if (!character) return <div>Персонаж не найден</div>;

  return (
    <div className={styles.character}>
      <ButtonBack/>
      <div className={styles.character__content}>
        <img
          src={character.image}
          alt={character.name}
          className={styles.character__image}
        />
        <div className={styles.character__details}>
          <h2 className={styles.character__title}>Имя: {character.name}</h2>
          <p>Статус: {character.status}</p>
          <p>Вид: {character.species}</p>
          <p>Пол: {character.gender}</p>
          <p>Происхождение: {character.origin.name}</p>
          <p>Местоположение: {character.location.name}</p>
        </div>
      </div>
      <div className={styles.character__section}>
        <h3>Эпизоды:</h3>
        <div>
          <ul className={styles.character__episodes}>
            {episodes.map((episode) => (
              <li key={episode.id}>
                <LinkCustom to={`/episode/${episode.id}`}>
                  №{episode.id} {episode.name}
                </LinkCustom>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
