from django.db import models

# Create your models here.
class con(models.Model):
    name=models.CharField(max_length=45)
    address=models.CharField(max_length=200)
    phone=models.CharField(max_length=10)
    comments=models.CharField(max_length=500)