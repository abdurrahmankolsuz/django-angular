from django.contrib.auth.models import User, Group
from .models import Post
from rest_framework import serializers
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')



class PostSerializer(serializers.ModelSerializer):  
    tags = TagListSerializerField()  
    class Meta:
        model = Post
        fields = ('title','content', 'slug','is_active',
        'is_deleted','modified_date','created_date','tags')
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }
