"""Tests the sign in endpoint."""
from fastapi.testclient import TestClient
from app.core.config import settings


def test_get_sign_in_token(client: TestClient) -> None:
    user = {
        'username': settings.TEST_USER,
        'password': settings.TEST_USER_PASSWORD,
    }
    response = client.post(f'{settings.API_V1_STR}/sign-in/token', data=user)
    assert response.status_code == 200
    assert response.cookies

    data = response.json()
    assert 'access_token' in data
    assert data['access_token']


def test_get_refresh_token(client: TestClient) -> None:
    user = {
        'username': settings.TEST_USER,
        'password': settings.TEST_USER_PASSWORD,
    }
    response = client.post(f'{settings.API_V1_STR}/sign-in/token', data=user)
    assert response.status_code == 200
    assert response.cookies

    response = client.post(f'{settings.API_V1_STR}/refresh-token', cookies=response.cookies)
    assert response.status_code == 200
    assert response.cookies

    data = response.json()
    assert 'access_token' in data
    assert data['access_token']
