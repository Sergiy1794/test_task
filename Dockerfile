FROM python:3.8

RUN mkdir /shop_project
WORKDIR /shop_project

COPY . /shop_project/
RUN pip3 install -r requirements.txt


CMD ["gunicorn", "--bind", ":80", "--workers", "3", "my_shop.wsgi"]
