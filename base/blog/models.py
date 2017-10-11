from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User
from taggit.managers import TaggableManager
from ckeditor.fields import RichTextField
from taggit_labels.widgets import LabelWidget

class Post(models.Model):

    title = models.CharField(_('Başlık'), max_length=50)
    content = RichTextField(config_name='awesome_ckeditor')
    #content = models.TextField(default='deneme')
    slug = models.SlugField(_('Slug'), max_length=200, unique=True)
    tags = TaggableManager()
    #tags = TagField(required=False, widget=LabelWidget)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(_('Aktif mi?'), default=False)
    is_deleted = models.BooleanField(_('Silindi mi?'), default=False)
    # objects = models.Manager()
    # active_objects = postManager()
    

    def __str__(self):
        return self.title


    class Meta:
        ordering = ('-created_date',)