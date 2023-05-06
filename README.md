<p align="center">
  <img src="public\manifest-icon-512.maskable.png" style="width: 70%; height: auto">
</p>

&nbsp;

# Biology Research Engine (BRE)

## About

The California State University of Sacramento's Biology Department has ~7000 collections and they wanted a way to manage them digitally. They asked us to create an easily accessible and reliable database software that would allow both faculty members and students of the school to edit or review the university's data collections, laboratories, and museums. We created an app where users can search through the databases and the faculty can sign in and modify the collection data.

## Features

What the application does

## Purpose

Why the application was created

## Screenshots & Example Gifs

A screenshot of your product.
Screen shot examples of your working project with descriptions

## Deployment

1. Install git, docker, & docker-compose.

2. Clone both `bre-react-app` & `bre-flask-server` into a desired directory.

   ```shell
   git clone https://github.com/sacramento-state-biology-collections/bre-react-app.git
   git clone https://github.com/sacramento-state-biology-collections/bre-flask-server.git
   ```

3. Create a compose file for the software stack called `docker-compose.yml`. (this file should be in the same directory as the cloned repositories)

   ```shell
   touch docker-compose.yml
   ```

4. Fill the compose file with the desired configuration. Example below:

   ```yaml
   version: '3.9'

   services:
     frontend:
       build: bre-react-app
       ports:
         - '80:3000'
       networks:
         bre_network:
           ipv4_address: 10.0.1.2

     backend:
       build: bre-flask-server
       ports:
         - '9001:9001'
       networks:
         bre_network:
           ipv4_address: 10.0.1.3

     database:
       image: postgres:latest
       ports:
         - '5432:5432'
       environment:
         - POSTGRES_USER=postgres
         - POSTGRES_PASSWORD=glueware@grems
         - POSTGRES_DB=biologydb
       volumes:
         - ./bre-flask-server/scripts/create_tables.sql:/docker-entrypoint-initdb.d/create_tables.sql
         - ./bre-flask-server/scripts/insert_data.sql:/docker-entrypoint-initdb.d/insert_data.sql
       networks:
         bre_network:
           ipv4_address: 10.0.1.4

   networks:
     bre_network:
       ipam:
         driver: default
         config:
           - subnet: 10.0.1.0/24
   ```

5. Run the stack by executing the docker compose command.
   ```shell
   docker compose up
   ```

## Testing

1. To run tests, clone `bre-react-app`.

   ```shell
   git clone https://github.com/sacramento-state-biology-collections/bre-react-app.git
   ```

2. Change directory to the `bre-react-app` and install node dependencies.

   ```shell
   cd bre-react-app
   npm install
   ```

3. Run the node command to run test scripts
   ```shell
   npm run test
   ```

## Contributions

<a href="https://github.com/sacramento-state-biology-collections/bre-react-app/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=sacramento-state-biology-collections/bre-react-app" />
</a>

- Brian Almaguer
- Joseph May
- Lauren Prather
- Ivan Yuen
- Kelly Bringino
- Leonardo Anguiano
- Tawheed Bayaz
- Evan Boswell
- Lukas Dolansky
