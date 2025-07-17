import { useEffect, useState } from 'react';
import { getCharacters } from '../../services/api';
import type { ICharacter } from '../../shared/models/ICharacter';
import { Preloader } from '../../components/preloader/Preloader';
import { Cards } from '../../components/cards/Cards';
import { Heading } from '../../components/heading/Heading';
// import styles from './MainPage.module.scss';

const MainPage = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    try {
      setisLoading(true);
      const characters = await getCharacters();
      setCharacters(characters);
    } catch (e) {
      console.log(e);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div>
      <Heading>Список персонажей</Heading>
      {isLoading ? (
        <Preloader />
      ) : (
        <Cards characters={characters} />
      )}
    </div>
  );
};

export default MainPage;
