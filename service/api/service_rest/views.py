from django.shortcuts import render

# Create your views here.
# list view for services 
# detail view for services 
# 
# inventoryVO 
# technician post + get - 
# service history - list of apts for specific vin and include details of apts

# class AutomobileVo(models.Model):
#     vin = models.CharField(max_length=17, unique=True)

# class Technician(models.Model):
#     name = models.CharField(max_length=100)
#     employee_number = models.CharField(max_length=100, unique=True)

# class Appointment(models.Model):
#     vin = models.ForeignKey(AutomobileVo, related_name="appointments", on_delete=CASCADE)
#     owner_name = models.CharField(max_length=100)
#     technician = models.ForeignKey(Technician, related_name="appointments", on_delete=models.CASCADE)
#     date = models.DateTimeField()
#     reason = models.TextField()



# api_services, 
# "services/<int:pk>", api_service
# api_show_appointment, 
# api_technician