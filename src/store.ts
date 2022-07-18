import Rekv from 'rekv';

interface InitState {
  balance: string;
}

const initState: InitState = {
  balance: '0',
};

const store = new Rekv(initState);

export default store;
