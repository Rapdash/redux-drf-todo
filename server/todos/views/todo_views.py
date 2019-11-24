from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST

from todos.models.todo_model import Todo
from todos.serializers import TodoSerializer

class TodoListView(APIView):
    def get(self, request, format=None):
        todos = Todo.objects.filter(owner=request.user.pk)
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data, HTTP_200_OK)

    def post(self, request, format=None):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, HTTP_201_CREATED)
        return Response(serializer.errors, HTTP_400_BAD_REQUEST)