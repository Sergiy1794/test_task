from django.shortcuts import render, get_object_or_404
from .models import Product, Feedback, OurProject
from django.http import HttpResponse, HttpResponseRedirect
from .forms import ContactForm
from django.core.mail import send_mail, BadHeaderError
from django.utils import translation


def main(request):

    photos = Product.objects.all().filter(available=True)[:4]
    prodjects = OurProject.objects.all()[:4]
    context = {
        'photos': photos,
        'prodjects': prodjects,
    }
    return render(request, 'index.html', context)

def contacts(request):

    form = ContactForm()

    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            subject = form.cleaned_data['username']
            send_phone = form.cleaned_data['phone']
            message = form.cleaned_data['comment']
            try:
                send_mail( subject, send_phone, message, ['sergiykov94@gmail.com'])
                form.save()
            except BadHeaderError:
                return HttpResponse('Ошибка в теме письма.')

    context = {'form': form}

    return render(request, 'contact.html', context)




def poslugy(request):

    return render(request, 'services.html', {})

def port(request):

    return render(request, 'portfolio.html', {})

def about(request):

    return render(request, 'about_as.html', {})
