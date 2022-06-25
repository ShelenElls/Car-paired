# your urls for the project will go here 
# 

from django.urls import path
from .views import (
    api_list_salesperson, 
    api_list_customers, 
    api_list_sales_records, 
    # api_show_sales_records,
)


urlpatterns = [
    path("salesperson/", api_list_salesperson, name="api_list_salesperson"),
    # path('salesperson/<int:pk>/', api_show_sales_records, name='show_api_sales_records'),
    path('customers/', api_list_customers, name='api_list_customers'),
    path('salesrecords/', api_list_sales_records, name='list_api_sales_records'),
]
