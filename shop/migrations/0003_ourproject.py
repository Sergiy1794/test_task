# Generated by Django 3.1.3 on 2020-11-16 10:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_auto_20201115_1456'),
    ]

    operations = [
        migrations.CreateModel(
            name='OurProject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('imageproject', models.ImageField(blank=True, upload_to='products/')),
            ],
        ),
    ]