from django.conf.urls import url
from . import views
from django.conf import settings

urlpatterns = [
    url(r'^$', views.main, name='main_page'),
    url(r'^services/$', views.services, name='services'),
    url(r'^portfolio/$', views.portfolio, name='port'),
    url(r'^about_us/$', views.about, name='about'),
    url(r'^contacts/$', views.contacts, name='contacts'),
]