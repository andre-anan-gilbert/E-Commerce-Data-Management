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

To use the testing container, modify the commands in the following way:

```
docker-compose -f"docker-pytest.yml" up --build -d
```

## Database

The Database is automatically created and populated with initial data. Even though it is not directly used by the application, a script that would create the used database is included [here](/scripts/Create_Database.sql) for easier reference than the alembic revision. All other scripts containing the database operations required in the task are located [in the same folder](/scripts/).

## Documentation

The documentation can be found in the folder [docs](/docs/). It includes the following:

- The [project documentation](/docs/reports/project_documentation_404.pdf) includes explanations to ER Diagram, Relational Model and Normalization, as well as general information about Authentication and APIs used for the CRUD Operations.
- For better visibility, full resolution versions of [ER Diagram](/docs/diagrams/ERModel.png) and [Relational Model](/docs/diagrams/RelationalModel.png) are included. Further diagrams are in the [same folder](/docs/diagrams/) but require opening with [draw.io](https://app.diagrams.net/) since there were some bugs in draw.io regarding the export.
- Finally, the [short presentation video](/docs/media/...) TODO: Link and Description once it is finished

## License

This repository is released under the [MIT license](https://opensource.org/licenses/MIT). In short, this means you are free to use this software in any personal, open-source or -commercial projects. Attribution is optional but appreciated.
