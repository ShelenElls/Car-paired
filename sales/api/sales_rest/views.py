from django.shortcuts import render

# Create your views here.

# for your SaleRecordDetailEncoder
# list your vin/vins as a property field, 
# and an encoder at the bottom ie- 
# encoders = {
    #     "vins": AutomobileVoEncoder(),
    #     "salesperson": SalespersonEncoder(),
    #      "customer": CustomerEncoder(), 

    # }

# sales list view for all:
# - "salesperson name"
# - "employee_num"
# - "customer name"
# - "vin/vins"
# - "price of sale"
# # encoders = {
    #     "vins": AutomobileVoEncoder(),
        # "salesperson": SalespersonEncoder(),
        # "employee_num": SalespersonEncoder(),
    #      "customer": CustomerEncoder(), 

    # }


# api_sales {example name thats listed in the url paths to show a 
# listview of sales }
# {if youre going to call details from the poller- 
# and you need to pull data from one of the other models
# in this app, all you have to do is make two try/except statements
# in the same block. 
# ie the vin numbers + salesperson + (maybe) customer}

# sale record- 
# if request.method == "POST":
# content = json.loads(request.body)
        #try:
        #     vin = content["{vins}"] {vins is my name on my model/view}
        #     vins = {name of your VO}.objects.get(vins=vin)
        #     content["{vins}"] = vins
        # except {name of your VO}.DoesNotExist:
        #     return JsonResponse(
        #         {"message": "Vin not in database"},
        #         status=400
        #     )
        # try:
        #     id = content["{Salesperson parameter}"] {no curly brackets, just an examp}
        #     num = {Modelname for salesperson}.objects.get(employee_number=id)
        #     content["{Salesperson parameter}"] = num
        # except {Modelname for salesperson}.DoesNotExist:
        #     return JsonResponse(
        #         {"message": "{thing} not in database"},
        #         status=400,
        #     )
        #  try:
        #     id = content["{customer}"] {customer}
        #     num = {Customer(model)}.objects.get(number=id)
        #     content["{customer}"] = num
        # except {customer}.DoesNotExist:
        #     return JsonResponse(
        #         {"message": "{thing} not in database"},
        #         status=400,
        #     )
        # sale = SaleRecord.objects.create(**content) 
# 
# 
# 
