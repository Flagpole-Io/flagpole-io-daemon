import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    'src/flagpole/generated/graphql/graphql.ts': {
      schema: 'http://localhost:3001/graphql',
      documents: 'src/flagpole/**/*.graphql',
      plugins: [
        'typescript',
        'typescript-operations',
        '@graphql-codegen/typescript-graphql-request',
      ],
    },
  },
};

export default config;
