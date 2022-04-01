"""Test REST API."""
import pytest
from typing import  Generator
from fastapi.testclient import TestClient
from app.database.session import SessionLocal
from app.main import app


@pytest.fixture(scope="session")
def db() -> Generator:
    yield SessionLocal()


@pytest.fixture(scope="module")
def client() -> Generator:
    with TestClient(app) as test_client:
        yield test_client
