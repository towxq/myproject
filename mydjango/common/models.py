# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class User(models.Model):
    id = models.CharField(max_length=20)
    username = models.CharField(max_length=50)
    password = models.IntegerField()