import Account from '@/pages/components/account';
import Balance from '@/pages/components/balance';
import ConnectWallet from '@/pages/components/connectWallet';

import styles from './header.less';

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <Account />
        <Balance />
        <ConnectWallet />
      </div>
    </>
  );
}
