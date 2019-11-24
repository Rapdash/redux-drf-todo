from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from todos.models.todo_model import Todo

# Create your views here.
class TodoListView(APIView):
    def get(self, request, format=None):
        todos = Todo.objects.filter(owner=request.user.pk)
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data, HTTP_200_OK)