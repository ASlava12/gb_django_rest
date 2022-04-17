from rest_framework import serializers
from .models import Project, ToDo
from users.serializers import UserSerializer


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    users = UserSerializer(many=True)
    class Meta:
        model = Project
        exclude = ["is_deleted"]


class ToDoSerializer(serializers.HyperlinkedModelSerializer):
    project = ProjectSerializer()
    user = UserSerializer()
    class Meta:
        model = ToDo
        exclude = ["is_deleted"]

