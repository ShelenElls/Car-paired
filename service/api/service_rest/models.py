from sqlite3 import Time
from tkinter import CASCADE
from django.db import models
from django.urls import reverse, reverse_lazy

# from inventory.api.inventory_rest.models import Automobile

# Create your models here.

class AutomobileVo(models.Model):
    vins = models.CharField(max_length=17, unique=True)

class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.CharField(max_length=100, unique=True)

class Appointment(models.Model):
    vinnew = models.CharField(max_length=17)
    owner_name = models.CharField(max_length=100)
    technician = models.ForeignKey(Technician, related_name="+", on_delete=models.PROTECT)
    date = models.CharField(max_length=100)
    time = models.CharField(max_length=100)
    reason = models.TextField()
    # finished = models.BooleanField(default=False)


class AptHistory(models.Model):
    vin = models.ForeignKey(AutomobileVo, related_name="apthistorys", on_delete=models.PROTECT)
    history = models.ForeignKey(Appointment, related_name="+", on_delete=models.PROTECT)







    # def get_api_url(self):
    #     return reverse("api_show_appointment", kwargs={"pk": self.pk})
# couldnt get success url to work, may try to do a redirect in react 

#needed- vin number- name of person, assigned tech(foreignkey), reason for service 

# VO's needed- vin number- name of person to whom the vehicle belongs, assigned tech



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