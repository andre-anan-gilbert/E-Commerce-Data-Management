"""Test functionalities related to authentification and authentication."""
from fastapi.testclient import TestClient
from app.core.config import settings


def get_token_headers(client: TestClient) -> dict[str, str]:
    """Return the token headers for usage in tests."""
    user = {
        'username': settings.TEST_USER,
        'password': settings.TEST_USER_PASSWORD,
    }
    response = client.post(f'{settings.API_V1_STR}/user/sign-in', data=user)
    data = response.json()
    access_token = data['access_token']
    return {'Authorization': f'Bearer {access_token}'}
