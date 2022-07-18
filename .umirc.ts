import { defineConfig } from 'umi';
import routes from './src/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  hash: true,
  history: {
    type: 'hash',
  },
  dynamicImport: {
    loading: '@/pages/components/loading',
  },
  exportStatic: {},
  mfsu: {},
});
