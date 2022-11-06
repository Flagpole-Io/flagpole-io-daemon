import { GraphQLClient } from 'graphql-request';
import config from './config';
import { getSdk } from './generated/graphql/graphql';

const client = new GraphQLClient(config.FLAGPOLE_GRAPHQL_URL);
const flagPoleSdk = getSdk(client);

export default flagPoleSdk;
