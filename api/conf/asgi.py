import os

from django.conf import settings
from django.contrib.staticfiles.handlers import ASGIStaticFilesHandler

from django_asgi_lifespan.asgi import get_asgi_application


# This line should not be needed, because the environment variable is already
# being set in other places, e.g.
#
# - the Docker container (using ``.env.docker``)
# - Pipenv shell (using ``.env``).
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "conf.settings")


application = get_asgi_application()


if settings.ENVIRONMENT == "local":
    application = ASGIStaticFilesHandler(application)


if settings.GC_DEBUG_LOGGING:
    import gc

    setting = 0
    for flag in settings.GC_DEBUG_LOGGING:
        setting |= getattr(gc, flag)

    gc.set_debug(setting)
