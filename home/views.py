from django.shortcuts import render, redirect
from django.views.generic import TemplateView

class IndexView(TemplateView):
    template_name = 'index.html'

def index(request):
    return render(request, 'index.html')

def health_report(request):
    return render(request, 'health_report.html')

def add_members(request):
    return render(request, 'add_members.html')

def medication(request):
    return render(request, 'medication.html')

def emergency(request):
    return render(request, 'emergency.html')

def ai_assistance(request):
    return render(request, 'ai_assistance.html')

def login(request):
    return render(request, 'login.html')

def logout(request):
    return redirect('login')
