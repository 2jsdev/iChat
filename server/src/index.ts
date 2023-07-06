import "dotenv/config";

import Server from "./server";

const main = async () => {
  try {
    const server = new Server();
    await server.start();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();
