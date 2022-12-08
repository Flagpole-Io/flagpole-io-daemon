# flagpole-io-daemon

Daemon that performs scheduled jobs related to Flagpole IO.

## Environment Variables

| Name                  | Suggested Value                                 | Required |
|-----------------------|-------------------------------------------------|----------|
| OPEN_WEATHER_API_KEY  |                                                 | Y        |
| OPEN_WEATHER_BASE_URL | https://api.openweathermap.org/data/2.5/weather | Y        |
| FLAGPOLE_GRAPHQL_URL  | http://localhost:3001/graphql                   | Y        |

## Getting Started

1. Create a `.env` file at the root of the project and populate it with the environment variables listed above.
2. Install the project dependencies
    ```shell
    npm install
    ```
3. Generate GraphQl code
   ```shell
   npm run codegen
   ```
4. Run the project
    ```shell
    npm run dev
    ```