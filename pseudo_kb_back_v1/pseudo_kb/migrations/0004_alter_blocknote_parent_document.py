# Generated by Django 4.1.13 on 2024-06-13 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("pseudo_kb", "0003_alter_blocknote_cover_image_alter_blocknote_icon_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="blocknote",
            name="parent_document",
            field=models.CharField(max_length=255),
        ),
    ]
