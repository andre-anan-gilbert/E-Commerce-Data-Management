#! /usr/bin/env bash

# Let the database start
python /app/app/pre_start.py

# Run migrations
alembic upgrade head

# Create initial data in the database
python /app/app/initial_data.py