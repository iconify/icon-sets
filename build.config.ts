import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  outDir: './dist',
  entries: [
    {
      input: 'src/index',
      name: 'index',
    },
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
});
