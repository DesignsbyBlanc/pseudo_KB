# Generated by Django 4.1.13 on 2024-06-13 06:32

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("pseudo_kb", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="blocknote",
            name="created",
            field=models.DateTimeField(
                auto_now_add=True, default=django.utils.timezone.now
            ),
            preserve_default=False,
        ),
    ]
