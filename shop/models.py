from django.db import models


class Product(models.Model):

    name = models.CharField(max_length = 100)
    image = models.ImageField(upload_to = 'products/', blank=True)
    description = models.TextField(blank = True)
    price = models.IntegerField()
    available = models.BooleanField(default = False)

    def __str__(self):
        return self.name

class Feedback(models.Model):

    username = models.CharField(max_length = 100)
    phone = models.CharField(max_length=15)
    comment = models.TextField(max_length = 200)


class Project(models.Model):

    title = models.CharField(max_length = 50)
    image = models.ImageField(upload_to = 'products/', blank=True)

    def __str__(self):
        return self.title