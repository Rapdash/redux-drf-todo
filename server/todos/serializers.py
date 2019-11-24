from rest_framework.serializers import ModelSerializer

from todos.models.todo_model import Todo

class TodoSerializer(ModelSerializer):
    class Meta:
        model = Todo
        fields = ('owner', 'title', 'body', 'checked_off')