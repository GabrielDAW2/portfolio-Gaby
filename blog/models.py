from django.db import models

class BlogList(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    image = models.ImageField(upload_to='blog/media/images')
    url = models.URLField(blank=True)
    
    def __str__(self):
        return self.title
