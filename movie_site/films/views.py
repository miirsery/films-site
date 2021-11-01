from rest_framework.generics import ListAPIView

from rest_framework.permissions import AllowAny

from .serializers import FilmSerializer

from .models import Film


class FilmListAPIView(ListAPIView):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer
    permission_classes = [AllowAny]