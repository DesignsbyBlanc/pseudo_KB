from django.db import models

# Create your models here.


class BlockNote(models.Model):
    title = models.CharField(max_length=255)
    user_id = models.CharField(max_length=100)
    is_archived = models.BooleanField(default=False)
    parent_document = models.CharField(max_length=255)
    content = models.JSONField()
    cover_image = models.TextField()
    icon = models.TextField()
    is_published = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
