#! /usr/bin/env bash

# Let postgreSQL start
python /app/app/pre_start.py

# Run migrations
alembic upgrade head

# Create initial data in postgreSQL
python /app/app/initial_data.py