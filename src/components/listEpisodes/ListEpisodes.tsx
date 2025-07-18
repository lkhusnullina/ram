import type { IEpisode } from '../../shared/models/IEpisode';
import styles from './ListEpisodes.module.scss';

interface ListEpisodesProps {
  episodes: IEpisode[];
}

export const ListEpisodes = ({ episodes }: ListEpisodesProps) => {
  return (
    <div className={styles.list}>
      {episodes.map((episode) => (
        <div className={styles.list__item} key={episode.id}>
          <h4>{episode.name}</h4> 
          <p>Дата выхода: {episode.air_date}</p>
        </div>
      ))}
    </div>
  );
};
