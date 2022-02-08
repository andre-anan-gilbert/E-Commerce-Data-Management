"""REST API."""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import item

app = FastAPI()

# Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

# Routers
app.include_router(item.router)


@app.get('/')
async def read_root():
    return {'message': 'Hello World'}
