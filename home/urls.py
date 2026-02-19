from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('health-report/', views.health_report, name='health_report'),
    path('add-members/', views.add_members, name='add_members'),
    path('medication/', views.medication, name='medication'),
    path('emergency/', views.emergency, name='emergency'),
    path('ai-assistance/', views.ai_assistance, name='ai_assistance'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
]
