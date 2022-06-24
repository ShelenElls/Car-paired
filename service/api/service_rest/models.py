from sqlite3 import Time
from tkinter import CASCADE
from django.db import models
from django.urls import reverse, reverse_lazy


class Status(models.Model):
    name = models.CharField(max_length=10, unique=True)

    class Meta:
        verbose_name_plural = "statuses" 

class AutomobileVo(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    is_vip = models.BooleanField(default=True)
    color = models.CharField(max_length=50)
    model = models.CharField(max_length=100)
    manufacturer = models.CharField(max_length=100)
    year = models.CharField(max_length=100)


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
    status = models.ForeignKey(
        Status,
        related_name="appointments",
        on_delete=models.PROTECT,
    )
    @classmethod
    def create(cls, **kwargs):
        kwargs["status"] = Status.objects.get(name="SCHEDULED")      
        appointment = cls(**kwargs)
        appointment.save()
        return appointment

    def completed(self):
        status = Status.objects.get(name="COMPLETED")
        self.status = status
        self.save()

    def cancelled(self):
        status = Status.objects.get(name="CANCELLED")
        self.status = status
        self.save()

