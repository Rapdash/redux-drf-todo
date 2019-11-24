from django.contrib.admin import site
from todos.models.todo_model import Todo
# Register your models here.

site.register(Todo)