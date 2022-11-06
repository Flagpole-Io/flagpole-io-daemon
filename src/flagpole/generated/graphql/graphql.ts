import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Configuration = {
  __typename?: 'Configuration';
  hasLights: Scalars['Boolean'];
  hasMotor: Scalars['Boolean'];
  hasWeatherProofFlag: Scalars['Boolean'];
};

export type ConfigurationInput = {
  hasLights: Scalars['Boolean'];
  hasMotor: Scalars['Boolean'];
  hasWeatherProofFlag: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addRequest?: Maybe<Scalars['Int']>;
  updateConfiguration?: Maybe<Configuration>;
};


export type MutationAddRequestArgs = {
  input: RequestInput;
};


export type MutationUpdateConfigurationArgs = {
  input: ConfigurationInput;
};

export type Query = {
  __typename?: 'Query';
  configuration?: Maybe<Configuration>;
  requests: Array<Request>;
  status?: Maybe<Status>;
};

export type Request = {
  __typename?: 'Request';
  action: Scalars['String'];
  value?: Maybe<Scalars['Int']>;
};

export type RequestInput = {
  action: Scalars['String'];
  value?: InputMaybe<Scalars['Int']>;
};

export type Status = {
  __typename?: 'Status';
  flag?: Maybe<Scalars['String']>;
  lights?: Maybe<Scalars['String']>;
};

export type GetConfigurationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetConfigurationQuery = { __typename?: 'Query', configuration?: { __typename?: 'Configuration', hasMotor: boolean, hasWeatherProofFlag: boolean, hasLights: boolean } | null };

export type GetStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatusQuery = { __typename?: 'Query', status?: { __typename?: 'Status', flag?: string | null, lights?: string | null } | null };

export type AddRequestMutationVariables = Exact<{
  input: RequestInput;
}>;


export type AddRequestMutation = { __typename?: 'Mutation', addRequest?: number | null };


export const GetConfigurationDocument = gql`
    query getConfiguration {
  configuration {
    hasMotor
    hasWeatherProofFlag
    hasLights
  }
}
    `;
export const GetStatusDocument = gql`
    query getStatus {
  status {
    flag
    lights
  }
}
    `;
export const AddRequestDocument = gql`
    mutation addRequest($input: RequestInput!) {
  addRequest(input: $input)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getConfiguration(variables?: GetConfigurationQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetConfigurationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetConfigurationQuery>(GetConfigurationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getConfiguration', 'query');
    },
    getStatus(variables?: GetStatusQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetStatusQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetStatusQuery>(GetStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStatus', 'query');
    },
    addRequest(variables: AddRequestMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddRequestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddRequestMutation>(AddRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addRequest', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;