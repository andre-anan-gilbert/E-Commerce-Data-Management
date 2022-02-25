"""Database Configuration."""
from typing import Any, Optional
from pydantic import BaseSettings, validator, PostgresDsn


class Settings(BaseSettings):
    """PostgreSQL settings."""
    PROJECT_NAME: str = '404'
    API_V1_STR: str = '/api/v1'

    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_HOST: str
    POSTGRES_PORT: str
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
            port=values.get('POSTGRES_PORT'),
            path=f'/{values.get("POSTGRES_DB") or ""}',
        )

    class Config:
        case_sensitive = True


settings = Settings()
