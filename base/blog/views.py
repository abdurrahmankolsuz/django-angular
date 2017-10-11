from django.shortcuts import render
from django.contrib.auth.models import User, Group
from .models import Post
from rest_framework import viewsets
from rest_framework.generics import ListCreateAPIView
from .serializers import UserSerializer, GroupSerializer ,PostSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'slug'

"""class PostList(ListCreateAPIView):

    model = Post
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.all()"""


