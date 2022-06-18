from tkinter import CASCADE
from django.db import models
from django.urls import reverse

# from inventory.api.inventory_rest.models import Automobile

# Create your models here.
class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.CharField(max_length=100, unique=True)

class Appointment(models.Model):
    vin = models.ForeignKey(AutomobileVo, related_name="appointments", on_delete=CASCADE)
    owner_name = models.CharField(max_length=100)
    technician = models.ForeignKey(Technician, related_name="appointments", on_delete=models.CASCADE)
    date = models.DateTimeField()
    reason = models.TextField()
    
    def get_api_url(self):
        return reverse("api_show_appointment", kwargs={"pk": self.pk})

#needed- vin number- name of person, assigned tech(foreignkey), reason for service 

# VO's needed- vin number- name of person to whom the vehicle belongs, assigned tech
class AutomobileVo(models.Model):
    vin = models.CharField(max_length=17, unique=True)



# models from inventory that need to be POLLED !!
# class Automobile(models.Model):
#     color = models.CharField(max_length=50)
#     year = models.PositiveSmallIntegerField()
#     vin = models.CharField(max_length=17, unique=True)

#     model = models.ForeignKey(
#         VehicleModel,
#         related_name="automobiles",
#         on_delete=models.CASCADE,
#     )

#     def get_api_url(self):
#         return reverse("api_automobile", kwargs={"vin": self.vin})