# Generated by Django 3.2.8 on 2021-11-06 18:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('films', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='film',
            name='image',
            field=models.ImageField(blank=True, default='preview-films/4.jpg', null=True, upload_to='preview-films/'),
        ),
    ]