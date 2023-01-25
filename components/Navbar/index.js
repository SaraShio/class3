import styles from './Navbar.module.css'
import Link from 'next/link'


export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h2>
                <Link href="/">
                    Home
                </Link>
            </h2>
            <h1>Adopt a cat!</h1>
            <h2>
                <Link href="about">
                    More info
                </Link>
            </h2>
        </nav>
    )
}