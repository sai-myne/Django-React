from django.contrib import admin

# Register your models here.
from .models import Tweet, TweetLike

class TweetlikeAdmin(admin.TabularInline):
    model = TweetLike

class TweetAdmin(admin.ModelAdmin):
    inlines = [TweetlikeAdmin]
    list_display = ['__str__', 'user']
    search_fields = ['content','user__username', 'user__email']
    class Meta:
        model = Tweet

admin.site.register(Tweet, TweetAdmin)