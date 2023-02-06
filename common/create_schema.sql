-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id serial not null,
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying(50) COLLATE pg_catalog."default" NOT NULL,
    hash character varying(50) COLLATE pg_catalog."default" NOT NULL,
    dob character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT name_unique UNIQUE (name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to kundan;

INSERT INTO public.users (name, email, hash, dob) VALUES ('kundan', 'kundan.bapat@gmail.com', '000', '1990-01-01');
INSERT INTO public.users (name, email, hash, dob) VALUES ('neeta', 'neetabapat@gmail.com', '001', '1991-03-02');
INSERT INTO public.users (name, email, hash, dob) VALUES ('tanay', 'tanaybapat1@gmail.com', '010', '1995-05-03');
INSERT INTO public.users (name, email, hash, dob) VALUES ('kavin', 'kavin.bapat@gmail.com', '011', '1997-07-04');
INSERT INTO public.users (name, email, hash, dob) VALUES ('maria', 'maria.paulraj@ust.com', '100', '1970-01-05');
INSERT INTO public.users (name, email, hash, dob) VALUES ('deepak', 'deepak@ust.com', '101', '1980-08-10');

-- ---------------------------- ----------------------------------------------

-- Table: public.active_users

-- DROP TABLE IF EXISTS public.active_users;

CREATE TABLE IF NOT EXISTS public.active_users
(
    id serial not null,
    -- de-normed.
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    since time without time zone,
    CONSTRAINT active_users_pkey PRIMARY KEY (id),
    CONSTRAINT fk_users FOREIGN KEY (id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.active_users
    OWNER to kundan;


INSERT INTO public.active_users (id, name, since) VALUES (1, 'kundan', '2022-02-01 00:00:00');
INSERT INTO public.active_users (id, name, since) VALUES (2, 'neeta', '2022-02-02 00:00:00');

-- ---------------------------- ----------------------------------------------

-- Table: public.rooms

-- DROP TABLE IF EXISTS public.rooms;

CREATE TABLE IF NOT EXISTS public.rooms
(
    id serial not null,
    room_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    creator_id integer NOT NULL,
    -- de normed.
    creator_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    since timestamp without time zone,
    CONSTRAINT rooms_pkey PRIMARY KEY (id),
    CONSTRAINT rooms_owner_unique UNIQUE (id, creator_id),
    CONSTRAINT fk_creator_id FOREIGN KEY (creator_id)
        REFERENCES public.active_users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.rooms
    OWNER to kundan;


INSERT INTO public.rooms (room_name, creator_id, creator_name, since) VALUES ('room1', 1, 'kundan', '2022-02-02 00:00:00');
INSERT INTO public.rooms (room_name, creator_id, creator_name, since) VALUES ('room2', 1, 'kundan', '2023-02-01 00:00:00');
INSERT INTO public.rooms (room_name, creator_id, creator_name, since) VALUES ('room1', 2, 'neeta', '2023-02-03 00:00:00');


-- ---------------------------- ----------------------------------------------

-- Table: public.room_users

-- DROP TABLE IF EXISTS public.room_users;

CREATE TABLE IF NOT EXISTS public.room_users
(
    id serial not null,
    room_id integer NOT NULL,
    creator_id integer NOT NULL,
    user_id integer NOT NULL,

    -- de normalized
    room_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    creator_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    user_name character varying(50) COLLATE pg_catalog."default" NOT NULL,

    CONSTRAINT room_users_pkey PRIMARY KEY (id),
    CONSTRAINT room_users_unique UNIQUE (room_id, creator_id, user_id),

    CONSTRAINT fk_room_id FOREIGN KEY (room_id)
        REFERENCES public.rooms (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,

    CONSTRAINT fk_creator_id FOREIGN KEY (creator_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.room_users
    OWNER to kundan;

INSERT INTO public.room_users (room_id, creator_id, user_id, room_name, creator_name, user_name) VALUES
    (1, 1, 1, 'room1', 'kundan', 'kundan');
INSERT INTO public.room_users (room_id, creator_id, user_id, room_name, creator_name, user_name)
    VALUES (2, 1, 2, 'room2', 'kundan', 'neeta');
INSERT INTO public.room_users (room_id, creator_id, user_id, room_name, creator_name, user_name)
    VALUES (1, 2, 1, 'room2', 'neeta', 'neeta');


-- ---------------------------- ----------------------------------------------

-- Table: public.message_log

CREATE TABLE IF NOT EXISTS public.message_log
(
    id serial NOT NULL,
    room_name character varying(50)[] COLLATE pg_catalog."default" NOT NULL,
    creator_name character varying(50)[] COLLATE pg_catalog."default" NOT NULL,
    user_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    message_time timestamp without time zone,
    message character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT message_log_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.message_log
    OWNER to kundan;

-- ---------------------------- ----------------------------------------------
