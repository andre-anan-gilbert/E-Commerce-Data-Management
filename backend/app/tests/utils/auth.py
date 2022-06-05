"""Test functionalities related to authentification and authentication."""
from typing import Dict

from fastapi.testclient import TestClient

from app.core.config import settings


def get_token_headers(client: TestClient) -> Dict[str, str]:
    """Return the token headers for usage in tests."""

    user = {
        'username': settings.TEST_USER,
        'password': settings.TEST_USER_PASSWORD,
    }
    response = client.post(f'{settings.API_V1_STR}/sign-in/token', data=user)

    token = response.json()
    access_token = token['access_token']

    return {'Authorization': f'Bearer {access_token}'}
