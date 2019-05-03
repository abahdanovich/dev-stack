FROM python:3
WORKDIR /app
COPY requirements.txt ./
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
RUN pip install -r requirements.txt
WORKDIR /app/src
ENTRYPOINT ["python"]
