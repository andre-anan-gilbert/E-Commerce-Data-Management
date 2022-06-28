# FastAPI

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

To ensure conformity with pylint, the created revision files should be formatted before committing then. Since Alembic does not care how the revision files are named, remove the generated revision id from the filename, but be sure to leave the variables `revision` and `down_revision` inside the files unchanged.

Also keep in mind that alembic currently [will not nearly autogenerate everything that is required](https://alembic.sqlalchemy.org/en/latest/autogenerate.html#what-does-autogenerate-detect-and-what-does-it-not-detect), and also will probably f\*\*k up the order in which the tables should be generated to ensure conformity with the foreign keys (alembic creates these in the table's constructors, not later seperately, what would be better), soin many cases a lot of manual adjustments háve to be made before the revision is actually usable and conform with the desired database.

To run the migration (actual change in the database):

```
alembic upgrade head
```
