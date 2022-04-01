"""Tests the products API endpoint."""
from fastapi.testclient import TestClient
from app.core.config import settings

def test_products(client: TestClient) -> None:
    response = client.get(f'{settings.API_V1_STR}/products')
    assert response.status_code == 200
    assert response.json() == {'message': 'Hello World'}
