"""Tests the products API endpoint."""
from fastapi.testclient import TestClient

from app.core.config import settings


def test_get_product(client: TestClient, token_headers: dict[str, str]) -> None:
    response = client.get(f'{settings.API_V1_STR}/products/get-product/4', headers=token_headers)

    assert response.status_code == 200

    product = response.json()

    print(product)

    assert product['id'] == 4
    assert product['name'] == 'Red Wine'
    assert product['price'] == 3.5
    assert product['description'] is None
    assert product['category_id'] == 2
    assert product['supplier_id'] == 2


def test_get_products(client: TestClient, token_headers: dict[str, str]) -> None:
    response = client.get(f'{settings.API_V1_STR}/products/get-products', headers=token_headers)

    assert response.status_code == 200

    products = response.json()

    assert len(products) == 4

    for product in products:
        assert product['id']
        assert product['name']
        assert product['price']
        assert product['category_id']
        assert product['supplier_id']


def test_create_product(client: TestClient, token_headers: dict[str, str]) -> None:
    data = {
        'name': 'Test Product',
        'price': 10.00,
        'category_id': 1,
        'supplier_id': 1,
    }

    response = client.post(f'{settings.API_V1_STR}/products/create', json=data, headers=token_headers)

    assert response.status_code == 200

    product = response.json()

    assert product['id'] == 5
    assert product['name'] == 'Test Product'
    assert product['price'] == 10.0
    assert product['description'] is None
    assert product['category_id'] == 1
    assert product['supplier_id'] == 1


def test_update_product(client: TestClient, token_headers: dict[str, str]) -> None:
    data = {
        'price': 12.99,
        'description': 'AAAAA',
        'category_id': 2,
    }

    response = client.put(f'{settings.API_V1_STR}/products/update/5', json=data, headers=token_headers)

    assert response.status_code == 200

    product = response.json()

    assert product['id'] == 5
    assert product['name'] == 'Test Product'
    assert product['price'] == 12.99
    assert product['description'] == 'AAAAA'
    assert product['category_id'] == 2
    assert product['supplier_id'] == 1


def test_delete_product(client: TestClient, token_headers: dict[str, str]) -> None:
    response = client.delete(f'{settings.API_V1_STR}/products/delete/5', headers=token_headers)

    assert response.status_code == 200

    response_get = client.get(f'{settings.API_V1_STR}/products/get-product/5', headers=token_headers)

    assert response_get.status_code == 404
