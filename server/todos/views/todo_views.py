from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT
from rest_framework.permissions import IsAuthenticated
from django.http import Http404

from todos.models.todo_model import Todo
from todos.serializers import TodoSerializer
from todos.permissions import IsOwner

class TodoListView(APIView):
    """
    Create a todo or get all todos associated with your account
    """
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        todos = Todo.objects.filter(owner=request.user.pk)
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request, format=None):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

class TodoDetailView(APIView):
    """
    Interact with individual Todos (PUT / DELETE)
    """
    permission_classes = [IsAuthenticated, IsOwner]
    
    def get_todo(self, pk):
        try:
            return Todo.objects.get(pk=pk)
        except Todo.doesNotExist:
            raise Http404

    def put(self, request, pk, format=None):
        todo = self.get_todo(pk)
        serializer = TodoSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        todo = self.get_todo(pk)
        todo.delete()
        return Response(status=HTTP_204_NO_CONTENT)