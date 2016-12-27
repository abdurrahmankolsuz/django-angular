from django.contrib.auth.models import User, Group
from .models import Post
from rest_framework import serializers
from taggit.models import Tag


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class PostSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Post
        fields = ('title','content', 'is_active',
        'is_deleted','modified_date','created_date')

class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag