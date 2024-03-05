import styles from './page.module.scss';
import Parallax from '@/components/parallax';
import Reveal from '@/components/reveal';
import { faFileAudio } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function MusicPage() {
  return (
    <>
      <Parallax background="/orchestra.jpeg"></Parallax>

      <main className={styles.main}>
        <Reveal>
          <p className="text-center">
            In his free time, Matt is an amateur clarinetist and saxophonist with over 20 years of performance
            experience. He began studying clarinet at age 9 under the tutelage of Scott Singer. Matt picked up saxophone
            in high school in order to play in the pit orchestra for the school musicals. Following in the footsteps of
            his grandfather,{' '}
            <Link href="https://en.wikipedia.org/wiki/Buzz_Brauner" target="_blank" rel="noopener">
              Buzz Brauner
            </Link>
            , a New York City studio musician and woodwind doubler, he is proficient on clarinet and bass clarinet as
            well as soprano, alto, and tenor saxophone.
          </p>
        </Reveal>

        <Reveal>
          <h2>Ensembles Performed With</h2>
          <ul>
            <li>
              <Link href="https://manhattanwindensemble.com/" target="_blank" rel="noopener">
                Manhattan Wind Ensemble | Manhattan, NY
              </Link>
            </li>
            <li className="order_mobile_last">
              <Link
                href="https://www.colgate.edu/academics/departments-programs/department-music/music-groups/university-orchestra"
                target="_blank"
                rel="noopener"
              >
                Colgate University Orchestra | Hamilton, NY
              </Link>
            </li>
            <li>
              <Link href="https://jhorchestra.org/" target="_blank" rel="noopener">
                Jackson Heights Orchestra | Queens, NY
              </Link>
            </li>
            <li className="order_mobile_last">
              <Link
                href="https://www.colgate.edu/academics/departments-programs/department-music/music-groups/chamber-players"
                target="_blank"
                rel="noopener"
              >
                Colgate University Chamber Players | Hamilton, NY
              </Link>
            </li>
            <li>OnStage, Inc. Pit Orchestra | Ramsey, NJ</li>
            <li className="order_mobile_last">
              <Link href="https://njmea.org/" target="_blank" rel="noopener">
                New Jersey All-State Symphonic Band
              </Link>
            </li>
          </ul>
        </Reveal>

        <Reveal>
          <h2>Recordings</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faFileAudio} size="lg" style={{ marginRight: 4, color: '#125e8a' }} />
              &nbsp;
              <Link href="/music/brahms.mp3">
                <i>Clarinet Quintet in B minor Op.115</i>, Brahms | Colgate University Chamber Players
              </Link>
            </li>
            <li className="order_mobile_last">
              <FontAwesomeIcon icon={faFileAudio} size="lg" style={{ marginRight: 4, color: '#125e8a' }} />
              &nbsp;
              <Link href="/music/danzon.mp3">
                <i>Danzón</i>, Paquito D&apos;Rivera | Colgate University Chamber Players
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faFileAudio} size="lg" style={{ marginRight: 4, color: '#125e8a' }} />
              &nbsp;
              <Link href="/music/bartok.mp3">
                <i>Contrasts, Sz.111</i>, Bartók | Colgate University Chamber Players
              </Link>
            </li>
            <li className="order_mobile_last">
              <FontAwesomeIcon icon={faFileAudio} size="lg" style={{ marginRight: 4, color: '#125e8a' }} />
              &nbsp;
              <Link href="/music/gershwin.mp3">
                <i>Rhapsody in Blue</i>, Gershwin | Colgate University Orchestra
              </Link>
            </li>
          </ul>
        </Reveal>
      </main>
    </>
  );
}
