import Network from '@/pages/components/network';

import styles from './footer.less';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href="#" target="_blank" rel="noreferrer">
        <span>Twitter</span>
      </a>
      <a href="#" target="_blank" rel="noreferrer">
        <span>Github</span>
      </a>
      <a href="#" target="_blank" rel="noreferrer">
        <span>Donate</span>
      </a>
      <div>
        <Network />
      </div>
    </div>
  );
}
