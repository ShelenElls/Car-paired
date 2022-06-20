# your urls for the project will go here 
# 

from django.urls import path
from .views import (
    api_list_salesperson, 
    api_list_customers, 
    api_list_sales_records, 
    api_show_sales_records,
)


urlpatterns = [
    path("salesperson/new/", api_list_salesperson, name="new_api_salesperson"),
    path('customers/new/', api_list_customers, name='new_api_customers'),
    path('sales_records/', api_list_sales_records, name='list_api_sales_records'),
    path('sales_records/<int:pk>/', api_show_sales_records, name='show_api_sales_records'),
]
