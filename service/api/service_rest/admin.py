from django.contrib import admin

from .models import Status, AutomobileVo, Technician, Appointment
# Register your models here.

@admin.register(Status)
class StatusAdmin(admin.ModelAdmin):
    pass 

@admin.register(AutomobileVo)
class AutomobileVoAdmin(admin.ModelAdmin):
    pass 

@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    pass 

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    pass 
