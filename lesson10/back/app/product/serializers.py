from rest_framework import serializers
from .models import Product
from core.serializers import UserSerializer
from comment.serializers import CommentSerializer

class ProductSerializer(serializers.ModelSerializer):
  owner = UserSerializer(read_only=True)
  comment_set = CommentSerializer(many=True, read_only=True)

  class Meta:
    model = Product
    fields = ('id', 'name', 'price', 'description', 'owner', 'comment_set', 'image')
    read_only_fields = ('owner',)