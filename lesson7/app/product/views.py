from django.shortcuts import render
from django.http import HttpResponse
from .models import Product

def my_app(request):
  products = Product.objects.values()
  return render(request, 'product/my_app.html', { 'products': products })
