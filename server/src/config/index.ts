import convict from 'convict';

const config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV",
  },
  serverUrl: {
    doc: "The server url.",
    format: String,
    default: "http://localhost:3000",
    env: "SERVER_URL",
  },
});

config.loadFile([
  __dirname + "/default.json",
  __dirname + "/" + config.get("env") + ".json",
]);

export default config;
