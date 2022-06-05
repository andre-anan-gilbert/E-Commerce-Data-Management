"""Test REST API."""
import pytest
from typing import Dict, Generator
from fastapi.testclient import TestClient

from app.database.session import SessionLocal
from app.main import app
from tests.utils.auth import get_token_headers


@pytest.fixture(scope='session')
def db() -> Generator:
    yield SessionLocal()


@pytest.fixture(scope='module')
def client() -> Generator:
    with TestClient(app) as test_client:
        yield test_client


@pytest.fixture(scope='module')
def token_headers(test_client: TestClient) -> Dict[str, str]:
    return get_token_headers(test_client)
