import type { ICharacter } from '../../shared/models/ICharacter';
import styles from './Modal.module.scss';

interface ModalProps {
  character: ICharacter;
  position: { x: number; y: number };
}

export const Modal = ({ character, position }: ModalProps) => {
  return (
    <div
      className={styles.modal}
      style={{
        left: `${position.x + 20}px`,
        top: `${position.y + 20}px`,
      }}
    >
      <div className={styles.modal__content}>
        <h3>{character.name}</h3>
        <p>Статус: {character.status}</p>
        <p>Вид: {character.species}</p>
        <p>Локация: {character.location.name}</p>
      </div>
    </div>
  );
};
