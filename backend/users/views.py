from rest_framework.viewsets import ModelViewSet
from rest_framework.mixins import ListModelMixin, UpdateModelMixin, RetrieveModelMixin
from rest_framework.viewsets import GenericViewSet
# from rest_framework.generics import ListAPIView, UpdateAPIView
from .models import User
from .serializers import UserSerializer
from rest_framework.pagination import LimitOffsetPagination


# Create your views here.
class UserLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 25


class UserModelViewSet(ListModelMixin, UpdateModelMixin, RetrieveModelMixin, GenericViewSet):
    pagination_class = UserLimitOffsetPagination
    queryset = User.objects.filter(is_deleted=False)
    serializer_class = UserSerializer
