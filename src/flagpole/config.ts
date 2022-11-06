import getRequiredEnvironmentVar from '../common/get-required-environment-var';

const config = {
  FLAGPOLE_GRAPHQL_URL: getRequiredEnvironmentVar('FLAGPOLE_GRAPHQL_URL'),
};

export default config;
