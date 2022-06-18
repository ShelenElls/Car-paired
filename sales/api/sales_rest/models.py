from django.db import models

# Create your models here.

# 
# class AutomobileVo(models.Model):
#     vins = models.CharField(max_length=17, unique=True)
# {this is how i set up the VO for the automobile}


# {for sale, sales person, and potential customer models}
# sales person:
# name = models.CharField(max_length=100)
# employee_num = models.CharField(max_length=100, unique=True)
# 
# customer 
# {would recommend just using char field for the number param}
# {you could make the number param unique that way you can call 
# it in view}
# 

# calling the foriegn key would look like this 
# class SaleRecord(models.Model):
# {other required parameters}
# vins = models.ForeignKey(AutomobileVo, related_name="sales", on_delete=models.PROTECT)
#{char field for the date param, json had a hard time parsing my datefield originally} 