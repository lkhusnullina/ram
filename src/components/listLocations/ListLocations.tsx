import type { ILocation } from '../../shared/models/ILocation';
import styles from './ListLocations.module.scss';

interface ListLocationsProps {
  locations: ILocation[];
}

export const ListLocations = ({ locations }: ListLocationsProps) => {
  return (
    <div className={styles.list}>
      {locations.map((location) => (
        <div className={styles.list__item} key={location.id}>
          <h4>{location.name}</h4> 
          <p>Тип: {location.type}</p>
        </div>
      ))}
    </div>
  );
};
