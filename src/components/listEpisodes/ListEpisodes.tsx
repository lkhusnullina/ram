import type { IEpisode } from '../../shared/models/IEpisode';
import styles from './ListEpisodes.module.scss';
import { LinkCustom } from '../linkCustom/LinkCustom';

interface ListEpisodesProps {
  episodes: IEpisode[];
}

export const ListEpisodes = ({ episodes }: ListEpisodesProps) => {
  return (
    <div className={styles.list}>
      {episodes.map((episode) => (
        <LinkCustom
          to={`/episode/${episode.id}`}
          className={styles.list__link}
          key={episode.id}
        >
          <div className={styles.list__item} key={episode.id}>
            <div className={styles.list__left}>
              <p>№{episode.id}</p>
              <h4>{episode.name}</h4>
            </div>
            <p>Дата выхода: {episode.air_date}</p>
          </div>
        </LinkCustom>
      ))}
    </div>
  );
};
