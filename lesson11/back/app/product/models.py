from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
  name = models.CharField(max_length=100)
  price = models.IntegerField(default=0)
  description = models.TextField()
  owner = models.ForeignKey(User, on_delete=models.CASCADE)
  image = models.ImageField()

  def __str__(self):
      return self.name
  
