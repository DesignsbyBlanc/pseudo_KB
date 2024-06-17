from rest_framework import serializers
from .models import BlockNote

class BlockNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlockNote
        fields = ["id", "title", "user_id", "content", "created"]