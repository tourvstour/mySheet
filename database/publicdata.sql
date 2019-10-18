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

 Date: 18/10/2019 12:54:53
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
-- Records of cod_waiting_list
-- ----------------------------
INSERT INTO "public"."cod_waiting_list" VALUES (132, 1234, 1234, 1, '820079567996', 3500, '66808403439', 'null', 'null', 'null', '10/26/2019', 1, '2019-10-16 11:46:56.432227');
INSERT INTO "public"."cod_waiting_list" VALUES (123, 1234, 1234, 1, '820079564894', 475, '66950272047', '41/47 ร้านเสริมสวยปุ๊ ถ.แกรนวิล ซ.3 อ. เบตง จ.ยะลา', 'null', 'null', '10/18/2019', 1, '2019-10-16 11:46:56.440157');
INSERT INTO "public"."cod_waiting_list" VALUES (127, 1234, 1234, 1, '820079571581', 970, '66625469787', '50/306 หมู่บ้านเมืองทองธานี ซ.C9 ถ.ติวานนท์ ต.บ้านใหม่ อ.ปากเกร็ด นนทบุรี 11120', 'null', '12312', '10/19/2019', 1, '2019-10-16 11:46:56.451169');
INSERT INTO "public"."cod_waiting_list" VALUES (130, 1234, 1234, 1, '820079570052', 2500, '66890915323', 'null', 'null', 'null', '10/24/2019', 1, '2019-10-16 11:46:56.465219');
INSERT INTO "public"."cod_waiting_list" VALUES (119, 1234, 1234, 2, '820079575081', 3500, '66637919263', 'null', 'null', '312', '10/25/2019', 1, '2019-10-16 11:46:56.474761');
INSERT INTO "public"."cod_waiting_list" VALUES (121, 1234, 1234, 2, '820079569481', 970, '66863227718', '268 ม.12 ต.นาแก้ว อ. โพนนาแก้ว จ.สกลนคร', 'null', 'null', '10/20/2019', 1, '2019-10-16 11:46:56.409705');
INSERT INTO "public"."cod_waiting_list" VALUES (125, 1234, 1234, 1, '820079569481', 970, '66863227718', '268 ม.12 ต.นาแก้ว อ. โพนนาแก้ว จ.สกลนคร', 'null', 'null', '10/20/2019', 1, '2019-10-16 11:46:56.409705');
INSERT INTO "public"."cod_waiting_list" VALUES (128, 1234, 1234, 1, '820079573084', 1080, '66804006460', 'null', '77777777', 'null', '10/22/2019', 1, '2019-10-16 11:46:56.415423');
INSERT INTO "public"."cod_waiting_list" VALUES (120, 1234, 1234, 2, '820079573084', 1080, '66804006460', 'null', '77777777', 'null', '10/22/2019', 1, '2019-10-16 11:46:56.415423');
INSERT INTO "public"."cod_waiting_list" VALUES (115, 1234, 1234, 2, '820079571286', 1049, '66649416974', 'null', 'null', 'null', '10/21/2019', 1, '2019-10-16 11:46:56.431869');
INSERT INTO "public"."cod_waiting_list" VALUES (126, 1234, 1234, 1, '820079571286', 1049, '66649416974', 'null', 'null', 'null', '10/21/2019', 1, '2019-10-16 11:46:56.431869');
INSERT INTO "public"."cod_waiting_list" VALUES (116, 1234, 1234, 2, '820079567996', 3500, '66808403439', 'null', 'null', 'null', '10/26/2019', 1, '2019-10-16 11:46:56.432227');
INSERT INTO "public"."cod_waiting_list" VALUES (118, 1234, 1234, 2, '820079564894', 475, '66950272047', '41/47 ร้านเสริมสวยปุ๊ ถ.แกรนวิล ซ.3 อ. เบตง จ.ยะลา', 'null', 'null', '10/18/2019', 1, '2019-10-16 11:46:56.440157');
INSERT INTO "public"."cod_waiting_list" VALUES (113, 1234, 1234, 2, '820079571581', 970, '66625469787', '50/306 หมู่บ้านเมืองทองธานี ซ.C9 ถ.ติวานนท์ ต.บ้านใหม่ อ.ปากเกร็ด นนทบุรี 11120', 'null', '12312', '10/19/2019', 1, '2019-10-16 11:46:56.451169');
INSERT INTO "public"."cod_waiting_list" VALUES (129, 1234, 1234, 1, '820079573051', 1130, '66863581193', 'null', 'null', '3123', '10/23/2019', 1, '2019-10-16 11:46:56.451489');
INSERT INTO "public"."cod_waiting_list" VALUES (117, 1234, 1234, 2, '820079573051', 1130, '66863581193', 'null', 'null', '3123', '10/23/2019', 1, '2019-10-16 11:46:56.451489');
INSERT INTO "public"."cod_waiting_list" VALUES (122, 1234, 1234, 2, '820079570052', 2500, '66890915323', 'null', 'null', 'null', '10/24/2019', 1, '2019-10-16 11:46:56.465219');
INSERT INTO "public"."cod_waiting_list" VALUES (131, 1234, 1234, 1, '820079575081', 3500, '66637919263', 'null', 'null', '312', '10/25/2019', 1, '2019-10-16 11:46:56.474761');
INSERT INTO "public"."cod_waiting_list" VALUES (114, 1234, 1234, 2, '820079567860', 4200, '66899924165', 'ที่ทำการปกครอง จ.ยโสธร ศาลากลางจังหวัดยโสธร ชั้น3 ต.ในเมือง อ.เมืองยโสธร จ.ยโสธร', '8888888', 'null', '10/27/2019', 1, '2019-10-16 11:46:56.411228');
INSERT INTO "public"."cod_waiting_list" VALUES (124, 1234, 1234, 1, '820079567860', 4200, '66899924165', 'ที่ทำการปกครอง จ.ยโสธร ศาลากลางจังหวัดยโสธร ชั้น3 ต.ในเมือง อ.เมืองยโสธร จ.ยโสธร', '8888888', 'null', '10/27/2019', 1, '2019-10-16 11:46:56.411228');

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
-- Records of transport_company
-- ----------------------------
INSERT INTO "public"."transport_company" VALUES (1, 1, 'ไปรษณีไทย', 1);
INSERT INTO "public"."transport_company" VALUES (3, 2, 'Kerry Express', 1);

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
-- Records of user_profiles
-- ----------------------------
INSERT INTO "public"."user_profiles" VALUES (2, 1234, 'วัมนชัย', 'ชื่อใจชม', 1, 'admin', '1234', 'reebok.tour1@gmail.com', '0871229187');

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
-- Records of user_store
-- ----------------------------
INSERT INTO "public"."user_store" VALUES (2, 1234, 'valista', 1, 1234);

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
