"""Creates initial data in the database."""
import logging
from app.database import init_db
from app.database.session import SessionLocal

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def init() -> None:
    database = SessionLocal()
    init_db.run(database)


def main() -> None:
    logger.info('Creating initial data.')
    init()
    logger.info('Initial data created.')


if __name__ == '__main__':
    main()
