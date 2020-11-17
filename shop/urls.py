from django.conf.urls import url
from . import views
from django.conf import settings



urlpatterns = [
    url('mainpage', views.main, name='main_page'),
    url('services', views.poslugy, name='services'),
    url('portfolio', views.port, name='port'),
    url('about_us', views.about, name='about'),
    url('contacts', views.contacts, name='contacts'),
    # url('base', views.base, name='base'),

]