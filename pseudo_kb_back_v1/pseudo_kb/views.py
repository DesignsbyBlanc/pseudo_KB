from django.shortcuts import render
from rest_framework import generics
from .serializers import BlockNoteSerializer
from .models import BlockNote

# Create your views here.


class BlockNoteListCreateAPIView(generics.ListCreateAPIView):
    queryset = BlockNote.objects.all()
    serializer_class = BlockNoteSerializer

class BlockNoteRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = BlockNote.objects.all()
    serializer_class = BlockNoteSerializer
