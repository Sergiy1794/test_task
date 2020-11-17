from django import forms
from .models import Feedback


class ContactForm(forms.ModelForm):
    class Meta:
        model = Feedback
        fields = ['username', 'phone', 'comment']



