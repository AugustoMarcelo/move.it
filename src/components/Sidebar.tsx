import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/components/Sidebar.module.css';
import Home from '../../public/icons/home.svg';

export function Sidebar() {
  const router = useRouter();

  return (
    <aside className={styles.container}>
      <img src="/logo.svg" alt="Três colunas azuis com a do meio maior do que as demais" />
      <nav>
        <ul>
          <li className={router.pathname === '/' && styles.activeLink}>
            <Link href="/">
              <a>
                <Home />
              </a>
            </Link>
          </li>
          <li className={router.pathname === '/ranking' && styles.activeLink}>
            <Link href="/ranking">
              <a>
                <img src="/icons/award.svg" alt="Medalha"/>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}