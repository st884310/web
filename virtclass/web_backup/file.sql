-- MySQL dump 10.14  Distrib 5.5.60-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: GFDO
-- ------------------------------------------------------
-- Server version	5.5.60-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `curriculum`
--

DROP TABLE IF EXISTS `curriculum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `curriculum` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `classname` char(20) DEFAULT NULL,
  `week` int(11) DEFAULT NULL,
  `time` char(20) DEFAULT NULL,
  `period` char(30) DEFAULT NULL,
  `classtotal` int(11) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curriculum`
--

LOCK TABLES `curriculum` WRITE;
/*!40000 ALTER TABLE `curriculum` DISABLE KEYS */;
INSERT INTO `curriculum` VALUES (2,'數位圖文編排輸出',1,'test','2',3),(3,'故事與腳本製作',1,'13:30','5',2),(4,'資訊傳播科技導論',1,'18:30','9',1),(5,'電腦與網路概論',1,'19:30','10',3),(6,'色彩管理與典藏技術',2,'13:30','5',3),(7,'電腦繪圖與基礎素描',3,'test','2',3),(8,'資訊傳播科技導論-2',3,'18:30','9',1),(9,'文創產業與數位內容應用實務',3,'20:15','10',3),(10,'文創產業與數位內容應用實務-2',4,'18:30','9',1),(11,'網頁規劃與設計',4,'09:10','2',3),(12,'互動遊戲製作與應用',5,'09:10','2',3),(13,'多媒體設計概論',4,'19:20','10',3);
/*!40000 ALTER TABLE `curriculum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `host`
--

DROP TABLE IF EXISTS `host`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `host` (
  `hid` int(11) NOT NULL,
  `host_num` int(11) DEFAULT NULL,
  `host_status` int(11) DEFAULT NULL,
  `host_ip` char(20) DEFAULT NULL,
  `mac` char(20) DEFAULT NULL,
  `host_vm1` char(10) DEFAULT NULL,
  `host_vm2` char(10) DEFAULT NULL,
  PRIMARY KEY (`hid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `host`
--

LOCK TABLES `host` WRITE;
/*!40000 ALTER TABLE `host` DISABLE KEYS */;
INSERT INTO `host` VALUES (1,1,0,'192.168.31.1','18:31:bf:d0:66:b2','PC1-1','PC1-2'),(2,2,0,'192.168.31.2','4c:ed:fb:91:91:38','PC2-1','PC2-2'),(3,3,1,'192.168.31.3','18:31:bf:d0:60:c8','PC3-1','PC3-2'),(4,4,0,'192.168.31.4','4c:ed:fb:91:92:14','PC4-1','PC4-2'),(5,5,0,'192.168.31.5','18:31:bf:d0:22:c2','PC5-1','PC5-2'),(6,6,0,'192.168.31.6','4c:ed:fb:91:7b:fa','PC6-1','PC6-2'),(7,7,0,'192.168.31.7','2c:fd:a1:34:c2:f4','PC7-1','PC7-2'),(8,8,0,'192.168.31.8','18:31:bf:d0:22:8e','PC8-1','PC8-2'),(9,9,0,'192.168.31.9','4c:ed:fb:91:7b:f6','PC9-1','PC9-2'),(10,10,0,'192.168.31.10','18:31:bf:d0:23:a6','PC10-1','PC10-2'),(11,11,0,'192.168.31.11','4c:ed:fb:91:90:c4','PC11-1','PC11-2'),(12,12,0,'192.168.31.12','18:31:bf:cf:fc:34','PC12-1','PC12-2'),(13,13,0,'192.168.31.13','4c:ed:fb:91:92:10','PC13-1','PC13-2'),(14,14,0,'192.168.31.14','4c:ed:fb:91:91:3e','PC14-1','PC14-2'),(15,15,0,'192.168.31.15','18:31:bf:d0:69:b8','PC15-1','PC15-2'),(16,16,0,'192.168.31.16','18:31:bf:d0:22:f8','PC16-1','PC16-2'),(17,17,0,'192.168.31.17','18:31:bf:d0:67:1c','PC17-1','PC17-2'),(18,18,0,'192.168.31.18','18:31:bf:d0:22:b8','PC18-1','PC18-2');
/*!40000 ALTER TABLE `host` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `member` (
  `id` int(11) NOT NULL,
  `uname` char(100) DEFAULT NULL,
  `unum` char(10) DEFAULT NULL,
  `passwd` char(96) DEFAULT NULL,
  `level` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'黃明渝','4040C029','4a54f31d23ef9e001ff98da858587541be646f32d2be40df6bc5cc75d335d91e95a123b42900b7ed6f2853770d1e2739','Admin'),(2,'程鈺凱','4040C003','4427d318216906cc85b849431e708fff699665d2c2e53a31ecd2acdd131e6d6bb9ba4cec0329332de2096216de993292','Admin'),(4,'Server','Server','33102c1c97c426b11351654fe490924f989867ada0fa3914819f2332dda9884350bce6068f35df0d8e97aee97e562f50','Admin'),(5,'高培展','4040C042','a5b39f23c111576aa4b03470fa4916fc0e9685a3adc34a79cb040ef0f1825b253d56c9c0f94090e4329dbe8473b0ca1b','Admin');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message` (
  `mid` int(11) NOT NULL,
  `mnum` char(10) DEFAULT NULL,
  `mpc` char(3) DEFAULT NULL,
  `message` char(20) DEFAULT NULL,
  `detail` char(200) DEFAULT NULL,
  `mtime` char(20) DEFAULT NULL,
  `megstatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (2,'4040C029','1','滑鼠不正常運作','沒有詳細的描述','2018/08/20 00:05:56',0),(4,'4040C003','7','鍵盤不正常運作','沒有詳細的描述','2018/09/22 22:56:23',1);
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nfcuser`
--

DROP TABLE IF EXISTS `nfcuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nfcuser` (
  `id` int(11) NOT NULL,
  `name` char(5) DEFAULT NULL,
  `unum` char(10) DEFAULT NULL,
  `cardnum` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nfcuser`
--

LOCK TABLES `nfcuser` WRITE;
/*!40000 ALTER TABLE `nfcuser` DISABLE KEYS */;
INSERT INTO `nfcuser` VALUES (1,'高培展','4040C042','test'),(2,'999','4040C002','e27ac700'),(3,'E04','4040C018','e6bd355c'),(4,'aaa','4030C030','01020304'),(5,'程鈺凱','4040C003','127ac600');
/*!40000 ALTER TABLE `nfcuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `original`
--

DROP TABLE IF EXISTS `original`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `original` (
  `oid` int(11) NOT NULL,
  `img_name` char(30) DEFAULT NULL,
  `original_time` char(30) DEFAULT NULL,
  `original_size` int(11) DEFAULT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `original`
--

LOCK TABLES `original` WRITE;
/*!40000 ALTER TABLE `original` DISABLE KEYS */;
INSERT INTO `original` VALUES (1,'win10-1803.img','2019/01/08 01:49:57',20),(2,'windows10.img','2018/12/14 20:32:20',20),(3,'win10.20190108.test.img','2019/01/08 00:46:57',20);
/*!40000 ALTER TABLE `original` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vm`
--

DROP TABLE IF EXISTS `vm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vm` (
  `vid` int(11) NOT NULL,
  `vm` char(10) DEFAULT NULL,
  `vm_status` char(10) DEFAULT NULL,
  `user` char(50) DEFAULT NULL,
  `time` char(50) DEFAULT NULL,
  PRIMARY KEY (`vid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vm`
--

LOCK TABLES `vm` WRITE;
/*!40000 ALTER TABLE `vm` DISABLE KEYS */;
INSERT INTO `vm` VALUES (1,'PC1-1','0','NULL','NULL'),(2,'PC1-2','0','NULL','NULL'),(3,'PC2-1','0','NULL','NULL'),(4,'PC2-2','0','NULL','NULL'),(5,'PC3-1','2','guest','2019/02/09 18:38:48'),(6,'PC3-2','0','NULL','NULL'),(7,'PC4-1','0','NULL','NULL'),(8,'PC4-2','0','NULL','NULL'),(9,'PC5-1','0','NULL','NULL'),(10,'PC5-2','0','NULL','NULL'),(11,'PC6-1','0','NULL','NULL'),(12,'PC6-2','0','NULL','NULL'),(13,'PC7-1','0','NULL','NULL'),(14,'PC7-2','0','NULL','NULL'),(15,'PC8-1','0','NULL','NULL'),(16,'PC8-2','0','NULL','NULL'),(17,'PC9-1','0','NULL','NULL'),(18,'PC9-2','0','NULL','NULL'),(19,'PC10-1','0','NULL','NULL'),(20,'PC10-2','0','NULL','NULL'),(21,'PC11-1','0','NULL','NULL'),(22,'PC11-2','0','NULL','NULL'),(23,'PC12-1','0','NULL','NULL'),(24,'PC12-2','0','NULL','NULL'),(25,'PC13-1','0','NULL','NULL'),(26,'PC13-2','0','NULL','NULL'),(27,'PC14-1','0','NULL','NULL'),(28,'PC14-2','0','NULL','NULL'),(29,'PC15-1','0','NULL','NULL'),(30,'PC15-2','0','NULL','NULL'),(31,'PC16-1','0','NULL','NULL'),(32,'PC16-2','0','NULL','NULL'),(33,'PC17-1','0','NULL','NULL'),(34,'PC17-2','0','NULL','NULL'),(35,'PC18-1','0','NULL','NULL'),(36,'PC18-2','0','NULL','NULL');
/*!40000 ALTER TABLE `vm` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-09 19:17:54
