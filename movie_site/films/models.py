from django.db import models


class Film(models.Model):
    title = models.CharField(
        max_length=468
    )
    description = models.TextField()
    image = models.ImageField(
        upload_to='preview-films/'
    )

    def __str__(self):
        return self.title
