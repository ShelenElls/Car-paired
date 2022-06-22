from django.db import models

# Create your models here.

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=30, unique=True)

class SalesPerson(models.Model):
    name = models.CharField(max_length=50)
    employee_num = models.CharField(max_length=100, unique=True, null=False)


class Customer(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=12, unique=True)


class SalesRecord(models.Model):
    sales_person = models.ForeignKey(
        SalesPerson,
        related_name='sales_record',
        on_delete=models.PROTECT,
        null = False,
    )
    
    vin = models.ForeignKey(
        AutomobileVO,
        related_name='sales_record',
        on_delete=models.PROTECT,
        null = False,
    )

    customer = models.ForeignKey(
        Customer,
        related_name='sales_record',
        on_delete=models.PROTECT,
        null = False,
    )
    sales_price = models.PositiveBigIntegerField()