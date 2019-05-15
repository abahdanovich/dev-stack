FROM python:3
WORKDIR /app
COPY requirements.txt ./
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PYTHONBREAKPOINT="web_pdb.set_trace"
RUN pip install -r requirements.txt
WORKDIR /app/src
ENTRYPOINT ["flask"]
CMD ["run", "--host=0.0.0.0"]
