from rest_framework.permissions import BasePermission

class IsOwner(BasePermission):
    """
    Checks if the creator of the todo & the current user are the same.
    """
    def has_object_permission(self, request, view, obj):
        return obj.owner == request.user