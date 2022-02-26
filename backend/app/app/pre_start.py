"""Tests if postgreSQL database is available."""
import logging
from tenacity import after_log, before_log, retry, stop_after_attempt, wait_fixed
from app.database.session import SessionLocal

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

MAX_TRIES = 60 * 5
WAIT_SECONDS = 1


@retry(
    stop=stop_after_attempt(MAX_TRIES),
    wait=wait_fixed(WAIT_SECONDS),
    before=before_log(logger, logging.INFO),
    after=after_log(logger, logging.WARN),
)
def init() -> None:
    try:
        database = SessionLocal()
        database.execute('SELECT 1')
    except Exception as err:
        logger.error(err)
        raise err


def main() -> None:
    logger.info('Initializing service.')
    init()
    logger.info('Service finished initializing.')


if __name__ == '__main__':
    main()
