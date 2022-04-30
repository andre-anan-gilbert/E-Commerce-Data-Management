"""Tests the sign in endpoint."""
from fastapi.testclient import TestClient
from app.core.config import settings


def test_get_access_token(client: TestClient) -> None:
    user = {
        'username': settings.TEST_USER,
        'password': settings.TEST_USER_PASSWORD,
    }
    response = client.post(f'{settings.API_V1_STR}/sign-in/token', data=user)
    tokens = response.json()
    assert response.status_code == 200
    assert response.cookies
    assert 'access_token' in tokens
    assert tokens['access_token']
