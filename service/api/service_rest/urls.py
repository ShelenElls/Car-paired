from django.urls import path
from .views import api_services, api_service, api_technician

# api_show_appointment

# technician ? 
#needs to be updated with view name
urlpatterns = [
    path("services/", api_services, name="api_services"),
    path("services/<int:pk>", api_service, name="api_service"),  
    path("technician/", api_technician, name="api_technician"),
]


   # detail view 
    # path("services/history/", api_show_appointment, name="api_show_appointment")
    # service history