import { useEffect, useState } from "react";
import { getLocations } from "../../services/api";
import type { ILocation } from "../../shared/models/ILocation";
import { Heading, ListLocations, Pagination, Preloader } from "../../components";
import styles from "./LocationsPage.module.scss";

const LocationsPage = () => {
  const [locations, setLocations] = useState<ILocation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setIsLoading(true);
        const response = await getLocations(currentPage);
        setLocations(response.results);
        setTotalPages(response.info.pages);
      } catch (error) {
        console.error('Ошибка при загрузке локаций', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCharacters();
  }, [currentPage]);

  return (
    <div>
      <div className={styles.top}>
        <Heading>Список локаций</Heading>
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
          <ListLocations locations={locations} />
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

export default LocationsPage;