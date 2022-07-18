import { InjectedConnector } from '@web3-react/injected-connector';
import { connectorNames, networkIds } from '@/constants';

export const injected = new InjectedConnector({
  supportedChainIds: Object.keys(networkIds).map((i) => Number(i)),
});

export const connectorsByName = {
  [connectorNames.Injected]: injected,
};

export default connectorsByName;
