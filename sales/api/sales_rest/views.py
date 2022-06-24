from django.shortcuts import render
import json
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from common.json import ModelEncoder
from .models import AutomobileVO, Customer, SalesPerson, SalesRecord

#----------------------------------------------------------------------------------
# Encoders
#----------------------------------------------------------------------------------

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ['vin']


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
    model = SalesRecord
    properties = ["sales_price", "sales_person", "customer", "id", "vin"]
    encoders = {
        "sales_person": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
        "vin": AutomobileVOEncoder(),
    }

# class SaleRecordDetailEncoder(ModelEncoder):
#     model = SalesRecord
#     properties = ["sales_price", "vin", "sales_person", "customer", "id"]
#     encoders = {
#         "sales_person": SalesPersonEncoder(),
#         "customer": CustomerEncoder(),
#
#     }
    
#   def get_extra_data(self, o):
#       return {"vin": o.vin}

class SalesPersonSalesHistoryEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["name", "employee_num", "id", "sale_records"]
    encoders = {"sale_records": SaleRecordListEncoder()}

#==============================================================================
# VIEWS
#==============================================================================

# Form for Salesperson

@require_http_methods(["GET", "POST"])
def api_list_salesperson(request):
    if request.method == "POST":
        content = json.loads(request.body)
        salesperson = SalesPerson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonEncoder,
            safe=False,
        )
    else:
        salesperson = SalesPerson.objects.all()
        return JsonResponse(
            {"salesperson": salesperson},
            encoder=SalesPersonEncoder,
        )



# Sales History for a Sales Person
#Needs more Work
@require_http_methods(["GET"])
def api_show_sales_records(request, pk):
    sales_person_id = SalesPerson.objects.all()
    if request.method == "GET":
        sales_person_id = SalesPerson.objects.filter(id=pk)
        sales_history = SalesRecord.objects.filter(sales_person_id=pk)

        return JsonResponse(
            {"sales_history": sales_history},
            encoder=SaleRecordListEncoder, 
            safe=False       
        )
    

# Form for Potential Customers 

@require_http_methods(["GET","POST"])
def api_list_customers(request):
    if request.method == "POST":
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        customer = Customer.objects.all()
        return JsonResponse(
            {"customer": customer},
            encoder=CustomerEncoder,
        )

#---------------------------------------------
# SALES RECORDS 
#---------------------------------------------

# List and Form for Sales Records 

@require_http_methods(["GET", "POST"])
def api_list_sales_records(request):
    
    if request.method == "GET":
        sales_records = SalesRecord.objects.all()
        return JsonResponse(
            {"sales_records": sales_records },
            encoder=SaleRecordListEncoder,
            safe=False
        )
    else: #POST
        content = json.loads(request.body)
        # Automobile Encoder
        #+++++++++++++++++++++++++++++++++++++++++++
        # Something wrong with the vin retrieval
        content = {
            **content,
            "sales_person": SalesPerson.objects.get(pk=content["sales_person"]),
            "vin": AutomobileVO.objects.get(vin=content["vin"]),
            "customer": Customer.objects.get(pk=content["customer"]),
        }
        sales_record = SalesRecord.objects.create(**content)
        return JsonResponse(
            sales_record,
            encoder = SaleRecordListEncoder,
            safe=False,
        )