PGDMP                      |            hero    16.1    16.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24877    hero    DATABASE     w   CREATE DATABASE hero WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE hero;
                postgres    false                        2615    24878    gral    SCHEMA        CREATE SCHEMA gral;
    DROP SCHEMA gral;
                postgres    false            �            1259    24879    hero    TABLE     d   CREATE TABLE gral.hero (
    id integer,
    name character varying,
    power character varying
);
    DROP TABLE gral.hero;
       gral         heap    postgres    false    6            �          0    24879    hero 
   TABLE DATA                 gral          postgres    false    216   P       �   �   x����
�0��<�mQ(::9t(�)���Z�=h��KD��(��NN����UJ��*յp	8o&<�u_jXm�F�N����l��Lw�g�;S$�
h��	`1Dʟ��r��W���:�ѽ%:-&L)o�Ʊ��s�g�o�.����K_��3d�     