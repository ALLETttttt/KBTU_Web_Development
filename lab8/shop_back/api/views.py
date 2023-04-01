from django.shortcuts import render
from api.models import Product, Category
# Create your views here.
from django.http.response import HttpResponse, JsonResponse

def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def product_detail(request, product_id):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    for product in products_json:
        if(product['id'] == product_id):
            return JsonResponse(product)
    return JsonResponse({'Error': 'Product not found'})


def category_list(request):
    category = Category.objects.all()
    category_json = [p.to_json() for p in category]
    return JsonResponse(category_json, safe=False)

def category_detail(request, category_id):
    category = Category.objects.all()
    category_json = [p.to_json() for p in category]
    for category in category_json:
        if(category['id'] == category_id):
            return JsonResponse(category)
    return JsonResponse({'Error': 'Category does not exit!!!'})


def products_by_category(request, category_id):
    list = Product.objects.filter(id = category_id)
    product_json = [p.to_json() for p in list]
    return JsonResponse(product_json, safe=False)