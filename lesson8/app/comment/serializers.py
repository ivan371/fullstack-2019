from rest_framework import serializers
from .models import Comment
from core.serializers import UserSerializer

class CommentSerializer(serializers.ModelSerializer):
  author = UserSerializer(read_only=True)

  class Meta:
    model = Comment
    fields = ('id', 'text', 'product', 'author')