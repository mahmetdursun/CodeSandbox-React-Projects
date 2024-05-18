import styles from "./styles.module.scss";

export const AdoptCatForm = ({ cat }) => {
  return (
    <div>
      {cat ? <p>Bu kediyi sahiplenin: {cat.name}</p> : null}
      {cat ? (
        <p>
          İsminizi giriniz:
          <br />
          <input
            type="text"
            id="name"
            className={styles.input}
            placeholder="isminiz buraya"
          />
          <br />
          <button>Sahplenme talebi gönderin</button>
        </p>
      ) : (
        <p>
          Lütfen bize e-mail bırakın, böylece sizinle iletişime geçelim:
          <br />
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="email buraya "
          />
          <br />
          <button>bilgi talebi gönderin</button>
        </p>
      )}
    </div>
  );
};
