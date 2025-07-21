import { useEffect, useState } from 'react';
import { getCharacters } from '../../services/api';
import type { ICharacter } from '../../shared/models/ICharacter';
import { Cards, Heading, Pagination, Preloader } from '../../components';
import styles from './MainPage.module.scss';

const MainPage = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setIsLoading(true);
        const response = await getCharacters(currentPage);
        setCharacters(response.results);
        setTotalPages(response.info.pages);
      } catch (error) {
        console.error('Ошибка при загрузке персонажей', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCharacters();
  }, [currentPage]);

  return (
    <div>
      <div className={styles.top}>
        <Heading>Персонажи</Heading>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>

      {isLoading ? (
        <Preloader />
      ) : (
        <div className={styles.content}>
          <Cards characters={characters} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      )}
    </div>
  );
};

export default MainPage;
