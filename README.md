Running tests
=============

API/CLI

```bash
docker-compose run api pytest
```

GUI

```bash
docker-compose run --entrypoint npm gui test
```


Running CLI scripts
===================

```bash
docker-compose run api python src/hello.py
```

Loading db schema
=================

```bash
docker-compose exec -T postgres psql -U postgres < api/src/schema.sql
```

Postgres CLI
============

```bash
docker-compose exec postgres psql -U postgres
```

Run shell inside container
==========================

```bash
docker-compose run api bash
```
