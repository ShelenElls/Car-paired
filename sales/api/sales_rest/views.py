from django.shortcuts import render
import json
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from common.json import ModelEncoder
from .models import AutomobileVO, Customer, SalesPerson, SalesRecord

# Create your views here.

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ['vin', 'sold', 'import_href']

class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["id", "name", "employee_num"]
 
class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number",
        "id",
    ]

class SaleRecordListEncoder(ModelEncoder):
    models = SalesRecord
    properties = ["sales_price", "vin", "sales_person", "customer", "id"]
    encoders = {
        "vin": AutomobileVOEncoder,
        "sales_person": SalesPersonEncoder,
        "customer": CustomerEncoder,
    }

class SaleRecordDetailEncoder(ModelEncoder):
    models = SalesRecord
    properties = ["sales_price", "vin", "sales_person", "customer", "id"]
    encoders = {
        "vin": AutomobileVOEncoder,
        "sales_person": SalesPersonEncoder,
        "customer": CustomerEncoder,
    }

class SalesPersonSalesHistoryEncoder(ModelEncoder):
    models = SalesPerson
    properties = ["name", "employee_num", "id"]
    encoders = {"sale_records": SaleRecordListEncoder}

# Form for Salesperson

@require_http_methods(["POST"])
def api_list_salesperson(request):
    if request.method == "POST":
        content = json.loads(request.body)
        salesperson = SalesPerson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonEncoder,
            safe=False,
        )

# Form for Potential Customers 

@require_http_methods(["POST"])
def api_list_customers(request):
    if request.method == "POST":
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )

# List and Form for Sales Records 

@require_http_methods(["GET", "POST"])
def api_list_sales_records(request):
    content = json.loads(request.body)
    if request.method == "GET":
        sales_record = SalesRecord.objects.all()
        return JsonResponse(
            {"sales_records": sales_record },
            encoder=SaleRecordListEncoder,
            safe=False,
        )
    else:
        # 3 try & except blocks for each encoder
        try:
            vin = AutomobileVO.objects.get(vin=content["vin"])
            content["vin"] = vin
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Vin not in database"},
                status=400,
            )
        try:
            sales_person = content["sales_person"]
            content["sales_person"] = SalesPerson.objects.get(sales_person=sales_person)
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Sales Person Does Not Exist"},
                status = 400,
            )
        try:
            potential_customer = Customer.objects.get(customer=content["customer"])
            content["customer"] = potential_customer 
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer Does Not Exist"},
                status=400,
            )
        sales_record = SalesRecord.objects.create(**content)
        return JsonResponse(
            sales_record,
            encoder = SaleRecordListEncoder,
            safe=False,
        )


# Sales History for a Sales Person

@require_http_methods(["GET"])
def api_show_sales_records(request, pk):
    if request.method == "GET":
        sales_persons_records = SalesPerson.objects.filter(id=pk)
        return JsonResponse(
            sales_persons_records,
            encoder=SalesPersonSalesHistoryEncoder,
            safe=False,        
        )