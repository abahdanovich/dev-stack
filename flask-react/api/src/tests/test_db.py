import psycopg2

DSN = "host=postgres dbname=postgres user=postgres password=docker"

def test_postgres():
    with psycopg2.connect(DSN) as conn:
        with conn.cursor() as cur:
            cur.execute("select * from foo;")
            data = cur.fetchall()

    assert len(data) > 1
