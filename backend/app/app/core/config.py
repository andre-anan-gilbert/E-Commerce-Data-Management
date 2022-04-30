"""Database Configuration."""
import secrets
from typing import Any, Optional, Union
from pydantic import AnyHttpUrl, BaseSettings, EmailStr, validator, PostgresDsn


class Settings(BaseSettings):
    """PostgreSQL settings."""
    API_V1_STR: str = '/api/v1'
    PROJECT_NAME: str

    @validator('PROJECT_NAME')
    def get_project_name(cls, value: Optional[str], values: dict[str, Any]) -> str:  # pylint: disable=no-self-argument
        if not value: return values['PROJECT_NAME']
        return value

    SECRET_KEY: str = secrets.token_urlsafe(32)
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15
    TEST_USER: EmailStr
    TEST_USER_PASSWORD: str

    BACKEND_CORS_ORIGINS: list[AnyHttpUrl] = []

    @validator('BACKEND_CORS_ORIGINS', pre=True)
    def assemble_cors_origins(cls, value: Union[str, list[str]]) -> Union[list[str], str]:  # pylint: disable=no-self-argument
        if isinstance(value, str) and not value.startswith('['):
            return [origin.strip() for origin in value.split(',')]
        elif isinstance(value, (list, str)):
            return value
        raise ValueError(value)

    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_HOST: str
    POSTGRES_DB: str
    SQLALCHEMY_DATABASE_URI: Optional[PostgresDsn] = None

    @validator('SQLALCHEMY_DATABASE_URI', pre=True)
    def assemble_database_connection(cls, value: Optional[str], values: dict[str, Any]) -> str:  # pylint: disable=no-self-argument
        if isinstance(value, str): return value
        return PostgresDsn.build(
            scheme='postgresql',
            user=values.get('POSTGRES_USER'),
            password=values.get('POSTGRES_PASSWORD'),
            host=values.get('POSTGRES_HOST'),
            path=f'/{values.get("POSTGRES_DB") or ""}',
        )

    class Config:
        case_sensitive = True


settings = Settings()
