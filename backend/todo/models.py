import uuid
from django.db import models

from backend.users.models import User

# Create your models here.

class Project(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255, required=True)
    repository_link = models.CharField(max_length=255)
    users = models.ManyToManyField(User)
    is_deleted = models.BooleanField(default=False)


class ToDo(models.Model):
    project = models.ForeignKey(Project, required=True, on_delete=models.CASCADE, on_update=models.CASCADE)
    text = models.TextField(blank=True)
    user = models.ForeignKey(User, required=True, on_delete=models.CASCADE, on_update=models.CASCADE)
    
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    is_deleted = models.BooleanField(default=False)
