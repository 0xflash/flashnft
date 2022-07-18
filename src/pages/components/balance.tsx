import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { formatEther } from '@ethersproject/units';

export default function Balance() {
  const { account, library, chainId } = useWeb3React();

  const [balance, setBalance] = React.useState();
  React.useEffect((): any => {
    if (!!account && !!library) {
      let stale = false;

      library
        .getBalance(account)
        .then((res: any) => {
          if (!stale) {
            setBalance(res);
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(undefined);
          }
        });

      return () => {
        stale = true;
        setBalance(undefined);
      };
    }
  }, [account, library, chainId]);
  const amount = formatEther(balance || 0);

  return (
    <span>
      <span>{balance ? `Ξ${Number(amount).toFixed(4)}` : ''}</span>
    </span>
  );
}
