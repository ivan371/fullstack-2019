from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, mixins
from .models import Product
from .serializers import ProductSerializer

def my_app(request):
  products = Product.objects.values()
  return render(request, 'product/my_app.html', { 'products': products })

class ProductViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.CreateModelMixin):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer

  def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class ProductSelfViewSet(viewsets.ModelViewSet):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer

  def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
  
  def get_queryset(self):
    queryset = super(ProductSelfViewSet, self).get_queryset()
    return queryset.filter(owner=self.request.user)