CREATE TABLE "Houses" (
    id  SERIAL PRIMARY KEY,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(10),
    zip INTEGER,
    img TEXT,
    mortgage DECIMAL,
    rent DECIMAL
);