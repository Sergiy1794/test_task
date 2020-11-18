from django.conf.urls import url
from . import views
from django.conf import settings

urlpatterns = [
    url(r'^$', views.main, name='main_page'),
    url(r'^services/$', views.poslugy, name='services'),
    url(r'^portfolio/$', views.port, name='port'),
    url(r'^about_us/$', views.about, name='about'),
    url(r'^contacts/$', views.contacts, name='contacts'),
]