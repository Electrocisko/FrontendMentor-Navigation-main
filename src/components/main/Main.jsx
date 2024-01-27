import styles from "./main.module.scss";

function Main() {
  return (
    <div className={styles.main_container}>
      <div>
        <img
          src="./src/assets/images/image-hero-mobile.png"
          alt=""
          className={styles.image}
        />
      </div>
      <h1 className={styles.title}>Make remote work</h1>
      <p className={styles.text}>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button className={styles.button}>Learn more</button>
      <div className={styles.images_container}>
        <img src="./src/assets/images/client-databiz.svg" alt="Databiz" height={"15px"} />
        <img src="./src/assets/images/client-audiophile.svg" alt="Audiophile" height={"20px"}/>
        <img src="./src/assets/images/client-meet.svg" alt="Meet" height={"15px"}/>
        <img src="./src/assets/images/client-maker.svg" alt="Maker" height={"15px"} />
      </div>
    </div>
  );
}

export default Main;
