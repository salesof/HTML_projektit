Kukkakauppa JSON Server
This project provides a simple JSON server for the "Kukkakauppa" application.

Prerequisites
Node.js installed
npx available

Follow these steps to start the JSON server:

1. Move to the Project Directory
   Open your terminal and navigate to the kukkakauppa folder:
   cd path/to/kukkakauppa

2. Start the JSON Server
   Run the following command to start the JSON server on port 3001:
   npx json-server --port=3001 --watch db.json

3. Access the Server
   Once the server is running, you can access the JSON data at:
   http://localhost:3001

The server will automatically watch for changes in the db.json file and update the data accordingly.
