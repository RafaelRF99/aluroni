// SCSS
import styles from './NavBar.module.scss'

//IMAGEM
import { ReactComponent as Logo } from 'assets/logo.svg'

export default function NavBar() {
    return (
        <nav className={styles.menu}>
            <Logo />
        </nav>
    );
};