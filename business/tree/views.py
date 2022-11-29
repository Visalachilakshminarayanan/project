from django.shortcuts import render,redirect
from tree.models import con
from tree.forms import conform
# Create your views here.

def home(request):
    return render(request,'home.html')

def about(request):
    return render(request,'about.html')

def contact(request):
    info=conform()
    if request.method=="POST":
        info=conform(request.POST)
        if info.is_valid():
            info.save()
            return redirect('/home')
    return render(request,'contact.html',{'info':info})

def show(request):
    info=con.objects.all()
    return render(request,'show.html',{'info':info})

def play(request):
    return render(request,'play.html')