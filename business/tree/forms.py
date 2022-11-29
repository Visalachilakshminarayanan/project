from django import forms
from tree.models import con

class conform(forms.ModelForm):
    class Meta:
        model=con
        fields='__all__'