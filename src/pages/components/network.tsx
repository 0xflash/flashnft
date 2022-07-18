import { Tag } from 'antd';
import { useWeb3React } from '@web3-react/core';
import { networkIds } from '@/constants';

export default function Network() {
  const { chainId } = useWeb3React();

  return (
    <>
      {
        // @ts-ignore
        chainId && networkIds[chainId]?.name && (
          // @ts-ignore
          <Tag>{networkIds[chainId]?.name}</Tag>
        )
      }
    </>
  );
}
