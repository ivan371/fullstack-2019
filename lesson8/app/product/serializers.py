from rest_framework import serializers
from .models import Product
from core.serializers import UserSerializer
from comment.serializers import CommentSerializer

class ProductSerializer(serializers.ModelSerializer):
  owner = UserSerializer(read_only=True)
  comment_set = CommentSerializer(many=True)

  class Meta:
    model = Product
    fields = ('id', 'name', 'price', 'description', 'creation_date', 'owner', 'comment_set')
    read_only_fields = ('owner',)