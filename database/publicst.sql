/*
 Navicat Premium Data Transfer

 Source Server         : localPG
 Source Server Type    : PostgreSQL
 Source Server Version : 110005
 Source Host           : 127.0.0.1:5432
 Source Catalog        : sheet
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 110005
 File Encoding         : 65001

 Date: 18/10/2019 12:56:25
*/


-- ----------------------------
-- Sequence structure for cod_pay_back_cod_pay_back_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."cod_pay_back_cod_pay_back_id_seq";
CREATE SEQUENCE "public"."cod_pay_back_cod_pay_back_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for cod_waiting_list_cod_waiting_list_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."cod_waiting_list_cod_waiting_list_id_seq";
CREATE SEQUENCE "public"."cod_waiting_list_cod_waiting_list_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for transport_company_transport_company_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."transport_company_transport_company_id_seq";
CREATE SEQUENCE "public"."transport_company_transport_company_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for user_expire_user_expire_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."user_expire_user_expire_id_seq";
CREATE SEQUENCE "public"."user_expire_user_expire_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for user_profiles_user_profile_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."user_profiles_user_profile_id_seq";
CREATE SEQUENCE "public"."user_profiles_user_profile_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for user_store_user_store_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."user_store_user_store_id_seq";
CREATE SEQUENCE "public"."user_store_user_store_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Table structure for cod_pay_back
-- ----------------------------
DROP TABLE IF EXISTS "public"."cod_pay_back";
CREATE TABLE "public"."cod_pay_back" (
  "cod_pay_back_id" int8 NOT NULL DEFAULT nextval('cod_pay_back_cod_pay_back_id_seq'::regclass),
  "user_profile_number" int4 NOT NULL,
  "user_store_number" int4 NOT NULL,
  "transport_company_number" int2 NOT NULL,
  "cod_pay_back_track_number" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "cod_pay_back_sent_amount" int8 NOT NULL,
  "cod_pay_back_customer_name" varchar(255) COLLATE "pg_catalog"."default",
  "cod_pay_back_customer_address" varchar(255) COLLATE "pg_catalog"."default",
  "cod_pay_back_zipcode" varchar(32) COLLATE "pg_catalog"."default" DEFAULT 0,
  "cod_pay_back_customer_phone" varchar(20) COLLATE "pg_catalog"."default" DEFAULT 0,
  "cod_pay_back_date_transport" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "cod_pay_back_active" int2 NOT NULL DEFAULT 1,
  "d_update" timestamp(6)
)
;

-- ----------------------------
-- Table structure for cod_waiting_list
-- ----------------------------
DROP TABLE IF EXISTS "public"."cod_waiting_list";
CREATE TABLE "public"."cod_waiting_list" (
  "cod_waiting_list_id" int8 NOT NULL DEFAULT nextval('cod_waiting_list_cod_waiting_list_id_seq'::regclass),
  "user_profile_number" int4 NOT NULL,
  "user_store_number" int4 NOT NULL,
  "transport_company_number" int2 NOT NULL,
  "cod_waiting_list_track_number" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "cod_waiting_list_sent_amount" int8 NOT NULL,
  "cod_waiting_list_customer_name" varchar(255) COLLATE "pg_catalog"."default",
  "cod_waiting_list_customer_address" varchar(255) COLLATE "pg_catalog"."default",
  "cod_waiting_list_zipcode" varchar(32) COLLATE "pg_catalog"."default" DEFAULT 0,
  "cod_waiting_list_customer_phone" varchar(20) COLLATE "pg_catalog"."default" DEFAULT 0,
  "cod_waiting_list_date_transport" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "cod_waiting_list_active" int2 NOT NULL DEFAULT 1,
  "d_update" timestamp(6)
)
;

-- ----------------------------
-- Table structure for transport_company
-- ----------------------------
DROP TABLE IF EXISTS "public"."transport_company";
CREATE TABLE "public"."transport_company" (
  "transport_company_id" int8 NOT NULL DEFAULT nextval('transport_company_transport_company_id_seq'::regclass),
  "transport_company_number" int4 NOT NULL,
  "transport_company_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "transport_company_active" int2 NOT NULL DEFAULT 1
)
;

-- ----------------------------
-- Table structure for user_expire
-- ----------------------------
DROP TABLE IF EXISTS "public"."user_expire";
CREATE TABLE "public"."user_expire" (
  "user_expire_id" int8 NOT NULL DEFAULT nextval('user_expire_user_expire_id_seq'::regclass),
  "user_profire_number" int4 NOT NULL,
  "user_pay_date" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "user_expire_date" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "user_expire_status" int2 NOT NULL
)
;

-- ----------------------------
-- Table structure for user_profiles
-- ----------------------------
DROP TABLE IF EXISTS "public"."user_profiles";
CREATE TABLE "public"."user_profiles" (
  "user_profile_id" int8 NOT NULL DEFAULT nextval('user_profiles_user_profile_id_seq'::regclass),
  "user_profile_number" int4 NOT NULL,
  "user_profile_fname" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "user_profile_lname" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "user_profile_active" int2 NOT NULL DEFAULT 1,
  "user_profiles_login_name" varchar(255) COLLATE "pg_catalog"."default",
  "user_profiles_login_password" varchar(255) COLLATE "pg_catalog"."default",
  "user_profiles_email" varchar(255) COLLATE "pg_catalog"."default",
  "user_profiles_phone" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for user_store
-- ----------------------------
DROP TABLE IF EXISTS "public"."user_store";
CREATE TABLE "public"."user_store" (
  "user_store_id" int8 NOT NULL DEFAULT nextval('user_store_user_store_id_seq'::regclass),
  "user_store_number" int4 NOT NULL,
  "user_store_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "user_store_active" int2 NOT NULL DEFAULT 1,
  "user_profile_number" int4 NOT NULL
)
;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."cod_pay_back_cod_pay_back_id_seq"
OWNED BY "public"."cod_pay_back"."cod_pay_back_id";
SELECT setval('"public"."cod_pay_back_cod_pay_back_id_seq"', 2, false);
ALTER SEQUENCE "public"."cod_waiting_list_cod_waiting_list_id_seq"
OWNED BY "public"."cod_waiting_list"."cod_waiting_list_id";
SELECT setval('"public"."cod_waiting_list_cod_waiting_list_id_seq"', 133, true);
ALTER SEQUENCE "public"."transport_company_transport_company_id_seq"
OWNED BY "public"."transport_company"."transport_company_id";
SELECT setval('"public"."transport_company_transport_company_id_seq"', 4, true);
ALTER SEQUENCE "public"."user_expire_user_expire_id_seq"
OWNED BY "public"."user_expire"."user_expire_id";
SELECT setval('"public"."user_expire_user_expire_id_seq"', 2, false);
ALTER SEQUENCE "public"."user_profiles_user_profile_id_seq"
OWNED BY "public"."user_profiles"."user_profile_id";
SELECT setval('"public"."user_profiles_user_profile_id_seq"', 3, true);
ALTER SEQUENCE "public"."user_store_user_store_id_seq"
OWNED BY "public"."user_store"."user_store_id";
SELECT setval('"public"."user_store_user_store_id_seq"', 3, true);

-- ----------------------------
-- Primary Key structure for table cod_pay_back
-- ----------------------------
ALTER TABLE "public"."cod_pay_back" ADD CONSTRAINT "cod_pay_back_pkey" PRIMARY KEY ("cod_pay_back_id");

-- ----------------------------
-- Primary Key structure for table cod_waiting_list
-- ----------------------------
ALTER TABLE "public"."cod_waiting_list" ADD CONSTRAINT "cod_waiting_list_pkey" PRIMARY KEY ("cod_waiting_list_id");

-- ----------------------------
-- Primary Key structure for table transport_company
-- ----------------------------
ALTER TABLE "public"."transport_company" ADD CONSTRAINT "transport_company_pkey" PRIMARY KEY ("transport_company_id");

-- ----------------------------
-- Primary Key structure for table user_expire
-- ----------------------------
ALTER TABLE "public"."user_expire" ADD CONSTRAINT "user_expire_pkey" PRIMARY KEY ("user_expire_id");

-- ----------------------------
-- Primary Key structure for table user_profiles
-- ----------------------------
ALTER TABLE "public"."user_profiles" ADD CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("user_profile_id", "user_profile_number");

-- ----------------------------
-- Primary Key structure for table user_store
-- ----------------------------
ALTER TABLE "public"."user_store" ADD CONSTRAINT "user_store_pkey" PRIMARY KEY ("user_store_id");
