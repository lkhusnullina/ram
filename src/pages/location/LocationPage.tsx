import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCharactersByUrls, getLocationById } from '../../services/api';

import { ButtonBack, LinkCustom, Preloader } from '../../components';

import type { ICharacter } from '../../shared/models/ICharacter';
import styles from './LocationPage.module.scss';
import type { ILocation } from '../../shared/models/ILocation';

const LocationPage = () => {
  const { id } = useParams();
  const [location, setLocation] = useState<ILocation | null>(null);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLocation = async () => {
      if (!id) return;
      try {
        setIsLoading(true);
        const location = await getLocationById(id);
        const characters = await getCharactersByUrls(location.residents);
        setLocation(location);
        setCharacters(characters);
      } catch (error) {
        console.error('Ошибка при загрузке эпизода', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadLocation();
  }, [id]);

  if (isLoading) {
    return <Preloader />;
  }

  if (!location) return <div>Локация не найдена</div>;

  return (
    <div className={styles.episode}>
      <ButtonBack/>
      <h2 className={styles.episode__title}>
        Название локации: {location.name}
      </h2>
      <div className={styles.episode__content}>
        <p>Тип локации: {location.type}</p>
        <p>Измерение: {location.dimension}</p>
        
      </div>
      <div className={styles.episode__section}>
          <h4>Список резидентов:</h4>
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

export default LocationPage;