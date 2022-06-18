import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

# Import models from sales_rest, here.
# from sales_rest.models import (yourVoName)


# def get_autos():
#     response = requests.get("http://inventory-api:8000/api/automobiles/")
#     content = json.loads(response.content)
#     print(content)
#     for {any param name} in content["autos"]: {autos is whats in the view in automobiles}
#         AutomobileVo.objects.update_or_create(
#             {the name of your field in views, ie vins or vin} = {param name}['vin']
#         )
# this is different than the other poll. nothing else is needed. 


def poll():
    while True:
        print('Sales poller polling for data')
        try:
            # Write your polling logic, here
            # name of your function
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
