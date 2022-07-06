"""Tests the sign in endpoint."""
from fastapi.testclient import TestClient
from app.core.config import settings


def test_sign_up(client: TestClient) -> None:
    user = {
        'email': 'user@example.com',
        'password': 'password123',
    }
    response = client.post(f'{settings.API_V1_STR}/user/sign-up', json=user)
    assert response.status_code == 200
    assert response.cookies

    data = response.json()
    assert 'access_token' in data
    assert data['access_token']


def test_sign_in(client: TestClient) -> None:
    user = {
        'username': settings.TEST_USER,
        'password': settings.TEST_USER_PASSWORD,
    }
    response = client.post(f'{settings.API_V1_STR}/user/sign-in', data=user)
    assert response.status_code == 200
    assert response.cookies

    data = response.json()
    assert 'access_token' in data
    assert data['access_token']


def test_create_refresh_token(client: TestClient, token_headers: dict[str, str]) -> None:
    response = client.post(f'{settings.API_V1_STR}/user/refresh-token', headers=token_headers)
    assert response.status_code == 200
    assert response.cookies

    data = response.json()
    assert 'access_token' in data
    assert data['access_token']


def test_get_current_user(client: TestClient, token_headers: dict[str, str]) -> None:
    response = client.get(f'{settings.API_V1_STR}/user/me', headers=token_headers)
    assert response.status_code == 200

    data = response.json()
    assert 'email' in data
