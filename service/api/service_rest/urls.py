from django.urls import path
from .views import api_services, api_service, api_technician, api_tech, api_finished_apt, api_cancelled_apt, api_show_appointment


urlpatterns = [
    path("services/", api_services, name="api_services"),
    path("services/new", api_services, name="api_services"),
    path("services/details/<int:pk>/", api_service, name="api_service"),  
    path("technician/", api_technician, name="api_technician"),
    path("technician/<int:pk>/", api_tech, name="api_tech"),
    path("services/finished/<int:pk>/", api_finished_apt, name="api_finished"),
    path("services/reject/<int:pk>/", api_cancelled_apt, name="api_cancelled"),
    path("services/history/", api_show_appointment, name="api_show_appointment"),
]

