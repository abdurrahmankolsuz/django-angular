from django.db import models
from django.utils.translation import ugettext_lazy as _
from taggit.managers import TaggableManager
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField

# Create your models here.
class About(models.Model):
    content = RichTextField(config_name='awesome_ckeditor')

    def __str__(self):
        return self.content

class Post(models.Model):

    title = models.CharField(_('Başlık'), max_length=50)
    short_content = models.CharField(_('Short Content'), max_length=250)
    content = RichTextField(config_name='awesome_ckeditor')
    slug = models.SlugField(_('Slug'), max_length=200, unique=True)
    tags = TaggableManager()
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(_('Aktif mi?'), default=False)
    is_deleted = models.BooleanField(_('Silindi mi?'), default=False)
    
    def __str__(self):
        return self.title

    class Meta:
        ordering = ('-created_date',)