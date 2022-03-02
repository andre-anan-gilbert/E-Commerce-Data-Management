# Database

This repository's goal is to show how to leverage Next.js and Fastapi to build a data management system that allows an E-Commerce Shop to keep track of orders, suppliers, and customers.

## Running the Application

To build the Docker images and run the Docker containers:
```
docker-compose up -d --build
```

To run the Docker containers:
```
docker-compose up -d
```

Now you can open your browser and interact with these URLs:

- Frontend, built with Docker, with routes handled based on the path: http://localhost:3000
- Backend, JSON based web API based on OpenAPI: http://localhost:8000/api/v1/openapi.json
- Automatic interactive documentation with Swagger UI (from the OpenAPI backend): http://localhost:8000/docs
- Alternative automatic documentation with ReDoc (from the OpenAPI backend): http://localhost:8000/redoc
- PGAdmin, PostgreSQL web administration: http://localhost:5050

To stop the Docker containers:
```
docker-compose down
```

To stop the Docker containers and remove named volumes:
```
docker-compose down -v
```

## License
This repository is released under the [MIT license](https://opensource.org/licenses/MIT). In short, this means you are free to use this software in any personal, open-source or -commercial projects. Attribution is optional but appreciated.