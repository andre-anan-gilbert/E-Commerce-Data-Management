#! /usr/bin/env bash

# Let the DB start
# sleep 10;
python /app/app/pre_start.py

# Run migrations
alembic upgrade head

# Create initial data in postgreSQL
python /app/app/initial_data.py