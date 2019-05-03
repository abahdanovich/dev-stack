FROM python:3
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
ENV FLASK_APP=src/server
ENV FLASK_ENV=development
ENTRYPOINT ["flask"]
CMD ["run", "--host=0.0.0.0"]
