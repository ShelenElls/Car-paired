# Generated by Django 4.0.3 on 2022-06-18 03:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='vin',
            new_name='vins',
        ),
    ]
