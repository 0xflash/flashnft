import flashNftABI from '../contracts/FlashNFT.json';

export const connectorNames = {
  Injected: 'Injected',
};

export const networkIds = {
  '1': { name: 'Ethereum', id: 1 },
  '3': { name: 'Ropsten', id: 3 },
  '4': { name: 'Rinkeby', id: 4 },
  '5': { name: 'Görli', id: 5 },
  '10': { name: 'Optimistic', id: 10 },
  '42': { name: 'Kovan', id: 42 },
  '56': { name: 'Bsc', id: 56 },
  '128': { name: 'Heco', id: 128 },
  '137': { name: 'Matic', id: 137 },
  '250': { name: 'Fantom', id: 250 },
};

export const contractConf = {
  flashNft: 'FlashNFT Contract Address',
  flashNftABI,
};
