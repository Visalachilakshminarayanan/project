from django.contrib import admin
from tree.models import con
# Register your models here.
class conadmin(admin.ModelAdmin):
    list=["name","address","phone","comments"]

admin.site.register(con,conadmin)