from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User
from taggit.managers import TaggableManager

class Post(models.Model):

    title = models.CharField(_('Başlık'), max_length=50)
    #category = models.ForeignKey(Category)
    content = models.TextField(default='deneme')
    #slug = models.SlugField(_('Slug'), max_length=200, unique=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(_('Active'), default=False)
    is_deleted = models.BooleanField(_('Silindi mi?'), default=False)
    # objects = models.Manager()
    # active_objects = postManager()
    tags = TaggableManager()

    def __str__(self):
        return self.title

   # def get_absolute_url(self):

    #    return '#!/post/{0}/'.format(self.slug)


    class Meta:
        ordering = ('-created_date',)