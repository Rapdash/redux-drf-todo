from django.db.models import Model, CharField, BooleanField, ForeignKey, CASCADE
from django.contrib.auth.models import User

class Todo(Model):
    owner = ForeignKey(User, related_name='todos', on_delete=CASCADE, blank=True)
    title = CharField(max_length=30)
    body = CharField(max_length=500)
    checked_off = BooleanField(default=False)
