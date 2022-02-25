"""REST API."""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core import config
from app.api.v1 import api_v1

app = FastAPI(
    title=config.settings.PROJECT_NAME,
    openapi_url=f'{config.settings.API_V1_STR}/openapi.json',
)

# Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

# Routers
app.include_router(api_v1.router, prefix=config.settings.API_V1_STR)
