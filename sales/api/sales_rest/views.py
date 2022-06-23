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
    properties = ['vin', 'sold']

    def get_extra_data(self, o):
        return {"vin": o.vin}

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
    properties = ["sales_price", "vin", "sales_person", "customer", "id"]
    encoders = {
        "vin": AutomobileVOEncoder,
        "sales_person": SalesPersonEncoder,
        "customer": CustomerEncoder,
    }

class SaleRecordDetailEncoder(ModelEncoder):
    model = SalesRecord
    properties = ["sales_price", "vin", "sales_person", "customer", "id"]
    encoders = {
        "vin": AutomobileVOEncoder,
        "sales_person": SalesPersonEncoder,
        "customer": CustomerEncoder,
    }

# class SalesPersonSalesHistoryEncoder(ModelEncoder):
#     model = SalesPerson
#     properties = ["name", "employee_num", "id"]
#     encoders = {"sale_records": SaleRecordListEncoder}

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
#Something wrong here
@require_http_methods(["GET"])
def api_show_sales_records(request, pk):
    if request.method == "GET":
        sales_person_id = SalesPerson.objects.filter(id=pk)

        sales_history = SalesRecord.objects.filter(sales_person_id=pk)

        return JsonResponse(
            {"{sales_person_id}": sales_history},
            encoder=SaleRecordDetailEncoder, 
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
def api_list_sales_records(request, automobile_vo_id=None):
    
    if request.method == "GET":
        if automobile_vo_id is not None:
            salerecords = SalesRecord.objects.filter(automobiles=automobile_vo_id)
        else:
            salerecords = SalesRecord.objects.all()
        # content = json.loads(request.body)
        # sales_record = SalesRecord.objects.all()
        return JsonResponse(
            {"sales_records": salerecords },
            encoder=SaleRecordListEncoder,
        )
    else: #POST
        content = json.loads(request.body)
        # Automobile Encoder
        #+++++++++++++++++++++++++++++++++++++++++++
        # Something wrong with the vin retrieval
        try:
            autosvin = content["vin"]
            automobile = AutomobileVO.objects.get(vin=autosvin)
            content["vin"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Vin not in database"},
                status=400,
            )
        #+++++++++++++++++++++++++++++++++++++++++++++++
        # Sales person Encoder
        try:
            salesperson = content["sales_person"]
            content["sales_person"] = SalesPerson.objects.get(sales_person=salesperson)
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Sales Person Does Not Exist"},
                status = 400,
            )
        # Customer Encoder
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