# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse
from models import User
# Create your views here.


def index(request):
    # return HttpResponse("hello world!")
    string = "你好！"
    list = ["微信","腾讯","百度","阿里"]
    dict = {"微信":"30000","腾讯":"35000","阿里":"40000"}
    dict1 = {"a": string, "b": list,"c": dict}
    user = User.object.get(id='1234edser56rte345678')
    return render(request, 'home.html', {'string': str(user)})

def add(request):
    a = request.GET['a']
    b = request.GET['b']
    c = int(a)+int(b)
    return HttpResponse(str(c))

def add2(request, a, b):
    c = int(a)+int(b)
    return HttpResponse(str(c))