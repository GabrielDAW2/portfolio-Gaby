# Generated by Django 4.2.16 on 2024-11-18 09:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_bloglist_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bloglist',
            name='image',
            field=models.ImageField(upload_to='blog/media/images'),
        ),
    ]