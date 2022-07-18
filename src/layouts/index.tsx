import { Web3ReactProvider } from '@web3-react/core';
import Footer from '@/pages/components/footer';
import Header from '@/pages/components/header';
import { getLibrary } from '@/utils';

export default function (props: any) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Header />
      <div className="contentWrap">{props.children}</div>
      <Footer />
    </Web3ReactProvider>
  );
}
