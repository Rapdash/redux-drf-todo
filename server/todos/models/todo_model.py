from django.db.models import Model, CharField, BooleanField, ForeignKey, CASCADE
from django.contrib.auth.models import User

class Todo(Model):
    ForeignKey(User, on_delete=CASCADE, related_name='todos')
    title = CharField(max_length=30)
    body = CharField(max_length=500)
    checked_off = BooleanField(default=False)
