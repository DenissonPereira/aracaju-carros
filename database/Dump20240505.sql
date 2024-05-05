-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: aracaju_carros
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carros`
--

DROP TABLE IF EXISTS `carros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `marca` varchar(255) DEFAULT NULL,
  `modelo` varchar(255) DEFAULT NULL,
  `ano` int DEFAULT NULL,
  `descricao` varchar(300) DEFAULT NULL,
  `preco` decimal(10,2) DEFAULT NULL,
  `quilometragem` int DEFAULT NULL,
  `disponibilidade` enum('Em estoque','Fora de estoque') DEFAULT NULL,
  `imagem1` varchar(400) DEFAULT NULL,
  `imagem2` varchar(400) DEFAULT NULL,
  `imagem3` varchar(400) DEFAULT NULL,
  `imagem4` varchar(400) DEFAULT NULL,
  `tipo` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_modelo_tipo` (`tipo`),
  CONSTRAINT `fk_modelo_tipo` FOREIGN KEY (`tipo`) REFERENCES `modelos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carros`
--

LOCK TABLES `carros` WRITE;
/*!40000 ALTER TABLE `carros` DISABLE KEYS */;
INSERT INTO `carros` VALUES (1,'Toyota','Corolla GLi',2024,'O Corolla é um ícone da Toyota, sinônimo de confiabilidade e elegância.',151010.00,0,'Em estoque','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/corolla%2Fbranco_polar.png?alt=media&token=072aad16-9be8-452c-b919-2707c58c56b4','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/corolla%2Fprata.png?alt=media&token=2b934cb1-71d6-42ff-bdb2-6895443e5cc7','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/corolla%2Fpreto.png?alt=media&token=49c1e005-3d55-4722-9cf6-019ce5fc2a58','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/corolla%2Fvermelho.png?alt=media&token=6c9f4a07-bf3e-453c-bbf5-2b402edfee86',1),(2,'Toyota','HIlux STD Power Pack',2024,'A Hilux é uma picape robusta e confiável da Toyota, conhecida por sua durabilidade e versatilidade.',244600.00,0,'Em estoque','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/hilux%2Fbranco.png?alt=media&token=d4f796fb-cf78-4247-ad70-7021eff7248c','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/hilux%2Fprata.png?alt=media&token=00d8e050-bfaa-416b-8842-4c2b72d80ec8','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/hilux%2Fpreto.png?alt=media&token=d95e7626-e6c6-401d-82e4-4396fa691dcf','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/hilux%2Fvermelha.png?alt=media&token=3258f714-a7c1-42d5-bed5-31b92f97c276',5),(3,'Toyota','SW4 SRX Platinum 7',2024,'A SW4 é um SUV de luxo da Toyota, reconhecido pelo conforto, sofisticação e desempenho. ',386000.00,0,'Fora de estoque','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/sw4%2Fbranca.png?alt=media&token=d16b56f0-f57f-472d-abbe-b51f1891de43','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/sw4%2Fprata.png?alt=media&token=13b56367-6e83-4d03-bf69-f5767ec7f3a4','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/sw4%2Fpreta.png?alt=media&token=0db00f09-53a7-421f-8805-150294efa328','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/sw4%2Fvermelha.png?alt=media&token=a182daaf-d838-4259-9f2a-638db9153278',2),(4,'Toyota','Yaris Hatch XL',2024,'Motor de 1.5 L Dual VVT-i 16 V DOHC Flex 110 cv (E) / 105 cv (G)⁶ com transmissão automática.',99550.00,0,'Em estoque','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/yaris%2Fbranca.png?alt=media&token=0ec7e998-3529-41b6-8703-f92c9f1f8298','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/yaris%2Fprata.png?alt=media&token=ff38182d-0b68-4472-87b4-4448f0843548','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/yaris%2Fpreta.png?alt=media&token=62476616-4322-45e7-b2fd-572e7b118574','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/yaris%2Fvermelha.png?alt=media&token=aea8da76-ab54-4dcc-af19-52a3a371c283',1),(5,'Toyota','Corolla Cross XR',2024,'A sintonia perfeita entre sistema híbrido, plataforma TNGA e muito espaço interno.',164610.00,0,'Em estoque','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/cross%2Fbranco.png?alt=media&token=acf5a8a6-7529-474e-bc90-885ac1d0147a','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/cross%2Fprata.png?alt=media&token=75f01806-085e-4921-99bd-b61b6aa3fce4','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/cross%2Fpreto.png?alt=media&token=a3e8db3c-90a8-4dfa-be28-57420da6a1e7','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/cross%2Fvermelho.png?alt=media&token=a3e1d9e4-f608-484c-8317-c66a665f802e',2),(6,'Toyota','GR Corolla',2024,'Montado em quantidade limitada na fábrica Motomachi GR por engenheiros altamente qualificados.',416990.00,0,'Em estoque','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/GR%20corolla%2Fbranco.png?alt=media&token=f5505585-432e-4438-b351-599b2ef87997','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/GR%20corolla%2Fprata.png?alt=media&token=c2fd46df-5bce-4794-a4a3-16f77af14b0f','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/GR%20corolla%2Fpreto.png?alt=media&token=b65979e2-119e-494e-8f12-546df1c81a00','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/GR%20corolla%2Fvermelho.png?alt=media&token=66ef69f1-dc3c-4aeb-a55e-07ed5179c3fc',3),(7,'Toyota','Hilux GR-SPort',2024,'A proposta de produto multiuso, enraizada por um DNA essencialmente dotado de robustez.',372890.00,0,'Em estoque','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/Hilux%20gr%2Fbranco.png?alt=media&token=5e13b6ef-5b50-4dd9-bdc3-a4644200b6b6','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/Hilux%20gr%2Fprata.png?alt=media&token=fc57299e-357a-4455-a953-5a7c9e1779b2','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/Hilux%20gr%2Fpreto.png?alt=media&token=366a06f5-ee66-4f5a-be54-45c0ce5b8f91','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/Hilux%20gr%2Fvermelho.png?alt=media&token=a329a739-1124-4ea3-8e92-0e761403c6d5',3),(8,'Toyota','Corolla Hybrid',2024,'A sintonia perfeita entre os motores, plataforma TNGA e transmissão.',189810.00,0,'Fora de estoque','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/corolla%20hibrido%2Fbranco.png?alt=media&token=c6ba7bf3-5d5e-4528-8feb-3766b57278e4','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/corolla%20hibrido%2Fprata.png?alt=media&token=c1803019-0411-4eae-91e5-35ce5cc3ab53','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/corolla%20hibrido%2Fpreto.png?alt=media&token=55fca88b-3aac-4895-9020-ebf7cfc0da83','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/corolla%20hibrido%2Fvermelho.png?alt=media&token=01d9846e-36f6-419b-9f0e-eca2a085d1a5',4),(9,'Toyota','RAV4 Plug-in Hybrid',2024,'Ande sempre com alto desempenho, tecnologia e conforto lado a lado dirigindo um SUV crossover versátil como você.',399990.00,0,'Em estoque','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/rav4%2Fbranco.png?alt=media&token=2008616b-512d-4125-9cc7-fa3ab62abfaa','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/rav4%2Fprata.png?alt=media&token=984f1b70-9c4a-4df0-a176-175240c37681','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/rav4%2Fpreto.png?alt=media&token=58367f36-a541-442f-853e-ef313eb34738','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/rav4%2Fvermelho.png?alt=media&token=be38e158-ee60-4ebd-badc-f6ed5fcee85a',4);
/*!40000 ALTER TABLE `carros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas` (
  `id` bigint NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `quantidade` varchar(255) DEFAULT NULL,
  `imagem` varchar(350) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (1,'Toyota','9','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/Marcas%2F580b57fcd9996e24bc43c4a3.png?alt=media&token=31a1761a-fa91-4719-89d7-6704bf95e64a'),(2,'Volkswagen','0','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/Marcas%2F580b57fcd9996e24bc43c4a5.png?alt=media&token=a723c540-000c-41d7-8b78-cdf2c82b21c6'),(3,'Hyundai','0','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/Marcas%2F5ec3e3d458550c0004427747.png?alt=media&token=c38244fa-71dd-4472-9982-d1da88e41a6f'),(4,'Chevrolet','0','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/Marcas%2F5ec3e41958550c0004427749.png?alt=media&token=6057d6c5-6505-468d-81ec-65ed10ac1618'),(5,'Alfa Romeo','0','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/Marcas%2F5ec3e4d258550c000442774e.png?alt=media&token=3b9fe0a4-e373-4486-8cab-957ddcae6d5e'),(6,'Audi','0','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/Marcas%2F5ec3e46558550c000442774b.png?alt=media&token=3141a818-efc2-4198-9ad1-3c8dd786097c'),(7,'Honda','0','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/Marcas%2F580b585b2edbce24c47b2c73.png?alt=media&token=347a7e45-b65c-43bc-88f6-8053fbcef9a3');
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas_seq`
--

DROP TABLE IF EXISTS `marcas_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas_seq`
--

LOCK TABLES `marcas_seq` WRITE;
/*!40000 ALTER TABLE `marcas_seq` DISABLE KEYS */;
INSERT INTO `marcas_seq` VALUES (151);
/*!40000 ALTER TABLE `marcas_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modelos`
--

DROP TABLE IF EXISTS `modelos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modelos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `modelo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modelos`
--

LOCK TABLES `modelos` WRITE;
/*!40000 ALTER TABLE `modelos` DISABLE KEYS */;
INSERT INTO `modelos` VALUES (1,'Carros de passeio'),(2,'SUVs'),(3,'Esportivos'),(4,'Híbridos'),(5,'Pick-ups');
/*!40000 ALTER TABLE `modelos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modelos_seq`
--

DROP TABLE IF EXISTS `modelos_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modelos_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modelos_seq`
--

LOCK TABLES `modelos_seq` WRITE;
/*!40000 ALTER TABLE `modelos_seq` DISABLE KEYS */;
INSERT INTO `modelos_seq` VALUES (151);
/*!40000 ALTER TABLE `modelos_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` bigint NOT NULL,
  `contato` varchar(255) DEFAULT NULL,
  `tipo` varchar(255) DEFAULT 'user',
  `nome` varchar(20) DEFAULT NULL,
  `sobrenome` varchar(50) DEFAULT NULL,
  `cpf` varchar(255) DEFAULT NULL,
  `endereco` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `foto` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `usuarios_chk_1` CHECK ((`tipo` in (_utf8mb4'user',_utf8mb4'admin')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'799989895','user','Silmara','Santos','640518978','Rua caixa baixa nova rua','silmara@email.com','1234','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/usuarios%2FPurple%20and%20Green%20Simple%20Woman%20Instagram%20Profile%20Picture.png?alt=media&token=93426026-42c0-40bb-a774-cf0172000584'),(2,'799989265','admin','Denisson','Pereira','6401568794','Rua nova caixa','denisson@gmail.com','123','https://firebasestorage.googleapis.com/v0/b/aracaju-carros.appspot.com/o/usuarios%2Fperfil.png?alt=media&token=d1a38c39-a3b5-48ef-8778-ae00c7f08b1a'),(302,'4555464564','admin','denis','frfrfr','302',NULL,'testando@email.com','123456','frfrfrf');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_seq`
--

DROP TABLE IF EXISTS `usuarios_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_seq`
--

LOCK TABLES `usuarios_seq` WRITE;
/*!40000 ALTER TABLE `usuarios_seq` DISABLE KEYS */;
INSERT INTO `usuarios_seq` VALUES (401);
/*!40000 ALTER TABLE `usuarios_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'aracaju_carros'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-05 10:22:31
