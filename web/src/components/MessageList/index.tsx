import styles from "./styles.module.scss";

import logoImg from "../../assets/logo.svg";

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="Dowhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos totam itaque iste. Praesentium itaque velit pariatur
            aliquam at, labore sed, ea quidem possimus fugiat minima, vitae
            obcaecati iusto modi veritatis?
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/nandumoura.png" />
            </div>
            <span>Fernando Moura</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            explicabo sequi quidem deserunt velit laudantium id aperiam ut
            quisquam tempora eius numquam qui quasi molestias, porro saepe
            ipsum, dolor eum?
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/nandumoura.png" />
            </div>
            <span>Fernando Moura</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, pariatur sapiente odio nesciunt culpa voluptatem
            temporibus explicabo suscipit accusantium libero sint quam ex
            laboriosam reprehenderit non nam voluptatibus numquam est.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/nandumoura.png" />
            </div>
            <span>Fernando Moura</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
