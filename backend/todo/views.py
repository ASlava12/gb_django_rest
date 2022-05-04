from rest_framework.viewsets import ModelViewSet
from .models import Project, ToDo
from .serializers import ProjectSerializer, ToDoSerializer
from rest_framework.pagination import LimitOffsetPagination

# Create your views here.

class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    pagination_class = ProjectLimitOffsetPagination
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    filterset_fields = ['name']

class ToDoModelViewSet(ModelViewSet):
    pagination_class = TodoLimitOffsetPagination
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
    filterset_fields = ['project', 'text']

    def perform_destroy(self, instance):
        instance.is_deleted = True
