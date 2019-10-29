from django.db import models
from django.contrib.auth.models import User

class MyUser(User):
  rating = models.IntegerField(default=0)
# Create your models here.
