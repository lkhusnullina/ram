import { useEffect, useState } from "react";
import type { IEpisode } from "../../shared/models/IEpisode";
import { getEpisodes } from "../../services/api";
import { Heading, ListEpisodes, Pagination, Preloader } from "../../components";
import styles from "./EpisodesPage.module.scss";


const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setIsLoading(true);
        const response = await getEpisodes(currentPage);
        setEpisodes(response.results);
        setTotalPages(response.info.pages);
      } catch (error) {
        console.error('Ошибка при загрузке эпизодов', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCharacters();
  }, [currentPage]);

  return (
    <div>
     
      <div className={styles.top}>
        <Heading>Список эпизодов</Heading>
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
          <ListEpisodes episodes={episodes} />
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

export default EpisodesPage;