import styles from './navbar.module.scss'

function Navbar() {
  return (
  <nav className={styles.nav}>
    <ul>
    <li>
        <a href="#"><img src="./src/assets/images/logo.svg" alt="" /></a>
      </li>
      <li>
        <a href="#">Features <img src="./src/assets/images/icon-arrow-down.svg" alt="Icon Arrow down" /></a>
      </li>
      <li>
        <a href="#">Company <img src="./src/assets/images/icon-arrow-down.svg" alt="Icon Arrow down" /></a>
      </li>
      <li>
        <a href="#">Careers</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <div className={styles.session}>
      <li>
        <a href="#">Login</a>
      </li>
      <li >
        <a className={styles.register} href="#">Register</a>
      </li>
      </div>

    </ul>
  </nav>
  )
}

export default Navbar


  



  
  