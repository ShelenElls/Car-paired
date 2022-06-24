import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

from sales_rest.models import AutomobileVO

def get_vin():
    response = requests.get("http://inventory-api:8000/api/automobiles/")
    content = json.loads(response.content)
    for automobile in content["autos"]:
        AutomobileVO.objects.update_or_create(
            vin=automobile["vin"]
        )

def poll():
    while True:
        print('Sales poller polling for data through get_vin')
        try:
            get_vin()
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(20)


if __name__ == "__main__":
    poll()
