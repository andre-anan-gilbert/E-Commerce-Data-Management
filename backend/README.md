# Fastapi

## Requirements

- Python 3.9
- See [requirements](requirements.txt).
## Development

To install the requirements:
```
pip install -r requirements.txt
```

To run the server:
```
docker-compose up -d
```

To bypass husky pre-commit if only Python files got changed:
```
git commit -m "message" --no-verify
```

## Migrations

During local development the app directory is mounted as a volume inside the container, thus you can also run the migrations with alembic commands inside the container. The migration files ought to be added to the repository.

To start an interactive session in the backend container (skip this step if you run alembic from your environment):
```
docker-compose exec backend bash
```

If you created a new model, make sure to import it in:
```
/backend/app/app/database/base.py
```

If you changed a model, create a revision:
```
alembic revision --autogenerate -m "message"
```

To run the migration (actual change in the database):
```
alembic upgrade head
```

