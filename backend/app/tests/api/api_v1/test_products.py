"""Tests the products API endpoint."""
from typing import Dict

from fastapi.testclient import TestClient

from app.core.config import settings


def test_get_product(client: TestClient, token_headers: Dict[str, str]) -> None:
    response = client.get(f'{settings.API_V1_STR}/products/get_product/1', headers=token_headers)

    print(response.json())

    assert response.status_code == 200

    product = response.json()

    assert product['name']
    assert product['price']
    assert product['category_id']
    assert product['supplier_id']


def test_get_products(client: TestClient, token_headers: Dict[str, str]) -> None:
    response = client.get(f'{settings.API_V1_STR}/products/get-products', headers=token_headers)

    print(response.json())

    assert response.status_code == 200

    products = response.json()

    assert len(products) == 3

    for product in products:
        assert product['name']
        assert product['price']
        assert product['category_id']
        assert product['supplier_id']


def test_create_product(client: TestClient, token_headers: Dict[str, str]) -> None:
    response = client.post(f'{settings.API_V1_STR}/products/create', headers=token_headers)

    assert response.status_code == 200


def test_update_product(client: TestClient, token_headers: Dict[str, str]) -> None:
    response = client.put(f'{settings.API_V1_STR}/products/', headers=token_headers)
    assert response.status_code == 200
    assert response.json() == {'message': 'Hello World'}


def test_delete_product(client: TestClient, token_headers: Dict[str, str]) -> None:
    response = client.delete(f'{settings.API_V1_STR}/products/', headers=token_headers)
    assert response.status_code == 200
    assert response.json() == {'message': 'Hello World'}
