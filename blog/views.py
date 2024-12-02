from django.shortcuts import render, get_object_or_404
from .models import BlogList

def all_blogs(request):
    blogList = BlogList.objects.all().order_by("-date")
    return render(request, "blog/all_blogs.html",{"blogList": blogList})

def detail(request,blog_id):
    blog = get_object_or_404(BlogList, pk=blog_id)
    return render(request, 'blog/detail.html', {"blog":blog})