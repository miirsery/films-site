from django.urls import path

from .views import FilmListAPIView


urlpatterns = [
    path('', FilmListAPIView.as_view())
]