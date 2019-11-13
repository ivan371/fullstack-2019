from django.db import models
from django.contrib.auth.models import User
from product.models import Product

class Comment(models.Model):
  text = models.TextField()
  author = models.ForeignKey(User, on_delete=models.CASCADE)
  product = models.ForeignKey(Product, on_delete=models.CASCADE)

  def __str__(self):
      return self.text
  
