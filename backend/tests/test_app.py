"""Test REST API."""
from api.main import app
from fastapi.testclient import TestClient

client = TestClient(app)


def test_read_main():
    response = client.get('/')
    assert response.status_code == 200
    assert response.json() == {'message': 'Hello World'}
