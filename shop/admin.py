from django.contrib import admin
from .models import Product, Feedback, OurProject
# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'image', 'description', 'price', 'available']
    list_editable = ['price', 'available']

class FeedbackAdmin(admin.ModelAdmin):
    list_display = ['username', 'phone', 'comment']

class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'imageproject']

admin.site.register(Product, ProductAdmin)
admin.site.register(Feedback, FeedbackAdmin)
admin.site.register(OurProject, ProjectAdmin)