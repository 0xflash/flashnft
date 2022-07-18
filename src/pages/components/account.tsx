import { useWeb3React } from '@web3-react/core';
import { formatAddress } from '@/utils';

export default function Account() {
  const { account, chainId } = useWeb3React();

  return (
    <span>
      <span>{account === null ? '' : formatAddress(account, 4) || ''}</span>
    </span>
  );
}
