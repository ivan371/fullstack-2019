from django.shortcuts import render

from rest_framework import viewsets, mixins
from rest_framework.decorators import action
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from django.contrib.auth.models import User

class UserViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  permission_classes = [AllowAny]

  @action(detail=False)
  def current(self, request, pk=None):
    print(self.request.user, request.user)
    serializer = UserSerializer(self.request.user)
    return Response(serializer.data)