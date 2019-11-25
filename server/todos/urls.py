from django.urls import path
from todos.views.todo_views import TodoListView, TodoDetailView

urlpatterns = [
    path('', TodoListView.as_view(), name="todo-list"),
    path('<int:pk>/', TodoDetailView.as_view(), name="todo-detail"),
]
