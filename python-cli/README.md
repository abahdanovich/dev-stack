Running scripts
===============

```bash
docker-compose run cli hello.py
```

Running tests
=============

```bash
docker-compose run --entrypoint pytest cli tests
```

Loading db schema
=================

```bash
docker-compose exec -T postgres psql -U postgres < cli/src/schema.sql
```

Postgres CLI
============

```bash
docker-compose exec postgres psql -U postgres
```
