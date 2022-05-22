-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: ENCADRINI
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrateur`
--

DROP TABLE IF EXISTS `administrateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrateur` (
  `idAdmin` int NOT NULL,
  PRIMARY KEY (`idAdmin`),
  UNIQUE KEY `idAdmin` (`idAdmin`),
  CONSTRAINT `administrateur_ibfk_1` FOREIGN KEY (`idAdmin`) REFERENCES `utilisateur` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrateur`
--

LOCK TABLES `administrateur` WRITE;
/*!40000 ALTER TABLE `administrateur` DISABLE KEYS */;
/*!40000 ALTER TABLE `administrateur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coencadrant`
--

DROP TABLE IF EXISTS `coencadrant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coencadrant` (
  `idTheme` int NOT NULL,
  `idProf` int NOT NULL,
  PRIMARY KEY (`idTheme`,`idProf`),
  UNIQUE KEY `idTheme` (`idTheme`),
  UNIQUE KEY `idProf` (`idProf`),
  CONSTRAINT `coencadrant_ibfk_1` FOREIGN KEY (`idTheme`) REFERENCES `theme` (`idTheme`),
  CONSTRAINT `coencadrant_ibfk_2` FOREIGN KEY (`idProf`) REFERENCES `enseignant` (`idProf`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coencadrant`
--

LOCK TABLES `coencadrant` WRITE;
/*!40000 ALTER TABLE `coencadrant` DISABLE KEYS */;
/*!40000 ALTER TABLE `coencadrant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contrat`
--

DROP TABLE IF EXISTS `contrat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contrat` (
  `idEtablissement` int NOT NULL,
  `idCompany` int NOT NULL,
  PRIMARY KEY (`idEtablissement`,`idCompany`),
  UNIQUE KEY `idEtablissement` (`idEtablissement`),
  UNIQUE KEY `idCompany` (`idCompany`),
  CONSTRAINT `contrat_ibfk_1` FOREIGN KEY (`idEtablissement`) REFERENCES `etablissement` (`idEtablissement`),
  CONSTRAINT `contrat_ibfk_2` FOREIGN KEY (`idCompany`) REFERENCES `entreprise` (`idCompany`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contrat`
--

LOCK TABLES `contrat` WRITE;
/*!40000 ALTER TABLE `contrat` DISABLE KEYS */;
/*!40000 ALTER TABLE `contrat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cycle`
--

DROP TABLE IF EXISTS `cycle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cycle` (
  `idCycle` int NOT NULL,
  `nombreAnnees` int DEFAULT NULL,
  PRIMARY KEY (`idCycle`),
  UNIQUE KEY `idCycle` (`idCycle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cycle`
--

LOCK TABLES `cycle` WRITE;
/*!40000 ALTER TABLE `cycle` DISABLE KEYS */;
/*!40000 ALTER TABLE `cycle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `domaine`
--

DROP TABLE IF EXISTS `domaine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `domaine` (
  `idDomaine` int NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idDomaine`),
  UNIQUE KEY `idDomaine` (`idDomaine`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `domaine`
--

LOCK TABLES `domaine` WRITE;
/*!40000 ALTER TABLE `domaine` DISABLE KEYS */;
/*!40000 ALTER TABLE `domaine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `encadrantentreprise`
--

DROP TABLE IF EXISTS `encadrantentreprise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `encadrantentreprise` (
  `idEncadrantEntreprise` int NOT NULL,
  `nom` varchar(20) DEFAULT NULL,
  `prenom` varchar(20) DEFAULT NULL,
  `numTelph` varchar(15) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `idCompany` int DEFAULT NULL,
  PRIMARY KEY (`idEncadrantEntreprise`),
  UNIQUE KEY `idEncadrantEntreprise` (`idEncadrantEntreprise`),
  UNIQUE KEY `email` (`email`),
  KEY `idCompany` (`idCompany`),
  CONSTRAINT `encadrantentreprise_ibfk_1` FOREIGN KEY (`idCompany`) REFERENCES `entreprise` (`idCompany`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `encadrantentreprise`
--

LOCK TABLES `encadrantentreprise` WRITE;
/*!40000 ALTER TABLE `encadrantentreprise` DISABLE KEYS */;
/*!40000 ALTER TABLE `encadrantentreprise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enseignant`
--

DROP TABLE IF EXISTS `enseignant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enseignant` (
  `idProf` int NOT NULL,
  `grade` enum('MAA','MAB','PR','MCA','MCB') DEFAULT NULL,
  PRIMARY KEY (`idProf`),
  UNIQUE KEY `idProf` (`idProf`),
  CONSTRAINT `enseignant_ibfk_1` FOREIGN KEY (`idProf`) REFERENCES `utilisateur` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enseignant`
--

LOCK TABLES `enseignant` WRITE;
/*!40000 ALTER TABLE `enseignant` DISABLE KEYS */;
/*!40000 ALTER TABLE `enseignant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entreprise`
--

DROP TABLE IF EXISTS `entreprise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entreprise` (
  `idCompany` int NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `adresse` varchar(50) DEFAULT NULL,
  `numTelph` varchar(15) DEFAULT NULL,
  `descrip` text,
  `email` varchar(50) NOT NULL,
  `password` varchar(150) DEFAULT NULL,
  `activate` tinyint(1) NOT NULL DEFAULT '1',
  `image` varchar(150) DEFAULT NULL,
  `token` varchar(150) DEFAULT NULL,
  `poste` enum('Prof','Etudiant','Admin','Entreprise') DEFAULT NULL,
  PRIMARY KEY (`idCompany`),
  UNIQUE KEY `idCompany` (`idCompany`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entreprise`
--

LOCK TABLES `entreprise` WRITE;
/*!40000 ALTER TABLE `entreprise` DISABLE KEYS */;
/*!40000 ALTER TABLE `entreprise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipe`
--

DROP TABLE IF EXISTS `equipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipe` (
  `numEquipe` int NOT NULL,
  `nombre` int DEFAULT NULL,
  `idProjet` int DEFAULT NULL,
  PRIMARY KEY (`numEquipe`),
  UNIQUE KEY `numEquipe` (`numEquipe`),
  KEY `idProjet` (`idProjet`),
  CONSTRAINT `equipe_ibfk_1` FOREIGN KEY (`idProjet`) REFERENCES `projet` (`idProjet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipe`
--

LOCK TABLES `equipe` WRITE;
/*!40000 ALTER TABLE `equipe` DISABLE KEYS */;
/*!40000 ALTER TABLE `equipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `etablappartientdom`
--

DROP TABLE IF EXISTS `etablappartientdom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `etablappartientdom` (
  `idEtablissement` int NOT NULL,
  `idDomaine` int NOT NULL,
  PRIMARY KEY (`idEtablissement`,`idDomaine`),
  UNIQUE KEY `idEtablissement` (`idEtablissement`),
  UNIQUE KEY `idDomaine` (`idDomaine`),
  CONSTRAINT `etablappartientdom_ibfk_1` FOREIGN KEY (`idEtablissement`) REFERENCES `etablissement` (`idEtablissement`),
  CONSTRAINT `etablappartientdom_ibfk_2` FOREIGN KEY (`idDomaine`) REFERENCES `domaine` (`idDomaine`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etablappartientdom`
--

LOCK TABLES `etablappartientdom` WRITE;
/*!40000 ALTER TABLE `etablappartientdom` DISABLE KEYS */;
/*!40000 ALTER TABLE `etablappartientdom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `etablissement`
--

DROP TABLE IF EXISTS `etablissement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `etablissement` (
  `idEtablissement` int NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `adresse` varchar(50) DEFAULT NULL,
  `numTelph` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`idEtablissement`),
  UNIQUE KEY `idEtablissement` (`idEtablissement`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etablissement`
--

LOCK TABLES `etablissement` WRITE;
/*!40000 ALTER TABLE `etablissement` DISABLE KEYS */;
/*!40000 ALTER TABLE `etablissement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `etudiant`
--

DROP TABLE IF EXISTS `etudiant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `etudiant` (
  `idEtudiant` int NOT NULL,
  `chefEquipe` tinyint(1) NOT NULL DEFAULT '0',
  `note` float DEFAULT NULL,
  `moy` float DEFAULT NULL,
  `idPromo` int DEFAULT NULL,
  `numEquipe` int DEFAULT NULL,
  PRIMARY KEY (`idEtudiant`),
  UNIQUE KEY `idEtudiant` (`idEtudiant`),
  KEY `idPromo` (`idPromo`),
  KEY `numEquipe` (`numEquipe`),
  CONSTRAINT `etudiant_ibfk_1` FOREIGN KEY (`idEtudiant`) REFERENCES `utilisateur` (`idUser`),
  CONSTRAINT `etudiant_ibfk_2` FOREIGN KEY (`idPromo`) REFERENCES `promotion` (`idPromo`),
  CONSTRAINT `etudiant_ibfk_3` FOREIGN KEY (`numEquipe`) REFERENCES `equipe` (`numEquipe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etudiant`
--

LOCK TABLES `etudiant` WRITE;
/*!40000 ALTER TABLE `etudiant` DISABLE KEYS */;
/*!40000 ALTER TABLE `etudiant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fichedesvoeux`
--

DROP TABLE IF EXISTS `fichedesvoeux`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fichedesvoeux` (
  `idProjet` int NOT NULL,
  `numEquipe` int NOT NULL,
  `priorite` int DEFAULT NULL,
  PRIMARY KEY (`idProjet`,`numEquipe`),
  UNIQUE KEY `idProjet` (`idProjet`),
  UNIQUE KEY `numEquipe` (`numEquipe`),
  CONSTRAINT `fichedesvoeux_ibfk_1` FOREIGN KEY (`idProjet`) REFERENCES `projet` (`idProjet`),
  CONSTRAINT `fichedesvoeux_ibfk_2` FOREIGN KEY (`numEquipe`) REFERENCES `equipe` (`numEquipe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fichedesvoeux`
--

LOCK TABLES `fichedesvoeux` WRITE;
/*!40000 ALTER TABLE `fichedesvoeux` DISABLE KEYS */;
/*!40000 ALTER TABLE `fichedesvoeux` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `filiere`
--

DROP TABLE IF EXISTS `filiere`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `filiere` (
  `idFiliere` int NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `dateLancement` year DEFAULT NULL,
  PRIMARY KEY (`idFiliere`),
  UNIQUE KEY `idFiliere` (`idFiliere`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `filiere`
--

LOCK TABLES `filiere` WRITE;
/*!40000 ALTER TABLE `filiere` DISABLE KEYS */;
/*!40000 ALTER TABLE `filiere` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livrable`
--

DROP TABLE IF EXISTS `livrable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `livrable` (
  `numLivrable` int NOT NULL,
  `type` varchar(150) DEFAULT NULL,
  `lien` varchar(150) DEFAULT NULL,
  `idProjet` int DEFAULT NULL,
  `numEquipe` int DEFAULT NULL,
  PRIMARY KEY (`numLivrable`),
  UNIQUE KEY `numLivrable` (`numLivrable`),
  KEY `idProjet` (`idProjet`),
  KEY `numEquipe` (`numEquipe`),
  CONSTRAINT `livrable_ibfk_1` FOREIGN KEY (`idProjet`) REFERENCES `projet` (`idProjet`),
  CONSTRAINT `livrable_ibfk_2` FOREIGN KEY (`numEquipe`) REFERENCES `equipe` (`numEquipe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livrable`
--

LOCK TABLES `livrable` WRITE;
/*!40000 ALTER TABLE `livrable` DISABLE KEYS */;
/*!40000 ALTER TABLE `livrable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `outil`
--

DROP TABLE IF EXISTS `outil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `outil` (
  `idOutil` int NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `descrip` text,
  PRIMARY KEY (`idOutil`),
  UNIQUE KEY `idOutil` (`idOutil`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `outil`
--

LOCK TABLES `outil` WRITE;
/*!40000 ALTER TABLE `outil` DISABLE KEYS */;
/*!40000 ALTER TABLE `outil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projet`
--

DROP TABLE IF EXISTS `projet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projet` (
  `idProjet` int NOT NULL,
  `deadline` date DEFAULT NULL,
  `idEncadrantEntreprise` int DEFAULT NULL,
  PRIMARY KEY (`idProjet`),
  UNIQUE KEY `idProjet` (`idProjet`),
  KEY `idEncadrantEntreprise` (`idEncadrantEntreprise`),
  CONSTRAINT `projet_ibfk_1` FOREIGN KEY (`idProjet`) REFERENCES `theme` (`idTheme`),
  CONSTRAINT `projet_ibfk_2` FOREIGN KEY (`idEncadrantEntreprise`) REFERENCES `encadrantentreprise` (`idEncadrantEntreprise`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projet`
--

LOCK TABLES `projet` WRITE;
/*!40000 ALTER TABLE `projet` DISABLE KEYS */;
/*!40000 ALTER TABLE `projet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotion`
--

DROP TABLE IF EXISTS `promotion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotion` (
  `idPromo` int NOT NULL,
  `annee` int DEFAULT NULL,
  `idCycle` int DEFAULT NULL,
  `idSpecialite` int DEFAULT NULL,
  PRIMARY KEY (`idPromo`),
  UNIQUE KEY `idPromo` (`idPromo`),
  KEY `idCycle` (`idCycle`),
  KEY `idSpecialite` (`idSpecialite`),
  CONSTRAINT `promotion_ibfk_1` FOREIGN KEY (`idCycle`) REFERENCES `cycle` (`idCycle`),
  CONSTRAINT `promotion_ibfk_2` FOREIGN KEY (`idSpecialite`) REFERENCES `specialite` (`idSpecialite`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion`
--

LOCK TABLES `promotion` WRITE;
/*!40000 ALTER TABLE `promotion` DISABLE KEYS */;
/*!40000 ALTER TABLE `promotion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `soutnance`
--

DROP TABLE IF EXISTS `soutnance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `soutnance` (
  `numS` int NOT NULL,
  `allowed` tinyint(1) NOT NULL DEFAULT '0',
  `date` date DEFAULT NULL,
  `pv` varchar(150) DEFAULT NULL,
  `idProjet` int DEFAULT NULL,
  PRIMARY KEY (`numS`),
  UNIQUE KEY `numS` (`numS`),
  KEY `idProjet` (`idProjet`),
  CONSTRAINT `soutnance_ibfk_1` FOREIGN KEY (`idProjet`) REFERENCES `projet` (`idProjet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `soutnance`
--

LOCK TABLES `soutnance` WRITE;
/*!40000 ALTER TABLE `soutnance` DISABLE KEYS */;
/*!40000 ALTER TABLE `soutnance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specialite`
--

DROP TABLE IF EXISTS `specialite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `specialite` (
  `idSpecialite` int NOT NULL,
  `nom` varchar(30) DEFAULT NULL,
  `dateLancement` year DEFAULT NULL,
  `nombreAnnees` int DEFAULT NULL,
  `idFiliere` int DEFAULT NULL,
  PRIMARY KEY (`idSpecialite`),
  UNIQUE KEY `idSpecialite` (`idSpecialite`),
  KEY `idFiliere` (`idFiliere`),
  CONSTRAINT `specialite_ibfk_1` FOREIGN KEY (`idFiliere`) REFERENCES `filiere` (`idFiliere`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specialite`
--

LOCK TABLES `specialite` WRITE;
/*!40000 ALTER TABLE `specialite` DISABLE KEYS */;
/*!40000 ALTER TABLE `specialite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suivie`
--

DROP TABLE IF EXISTS `suivie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suivie` (
  `idProjet` int NOT NULL,
  `idProf` int NOT NULL,
  `date` date DEFAULT NULL,
  `remarques` text,
  PRIMARY KEY (`idProjet`,`idProf`),
  UNIQUE KEY `idProjet` (`idProjet`),
  UNIQUE KEY `idProf` (`idProf`),
  CONSTRAINT `suivie_ibfk_1` FOREIGN KEY (`idProjet`) REFERENCES `projet` (`idProjet`),
  CONSTRAINT `suivie_ibfk_2` FOREIGN KEY (`idProf`) REFERENCES `enseignant` (`idProf`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suivie`
--

LOCK TABLES `suivie` WRITE;
/*!40000 ALTER TABLE `suivie` DISABLE KEYS */;
/*!40000 ALTER TABLE `suivie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `theme`
--

DROP TABLE IF EXISTS `theme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `theme` (
  `idTheme` int NOT NULL,
  `titre` varchar(50) DEFAULT NULL,
  `resume` text,
  `valide` tinyint(1) NOT NULL DEFAULT '0',
  `idProf` int DEFAULT NULL,
  `idCompany` int DEFAULT NULL,
  `idPromo` int DEFAULT NULL,
  PRIMARY KEY (`idTheme`),
  UNIQUE KEY `idTheme` (`idTheme`),
  KEY `idProf` (`idProf`),
  KEY `idCompany` (`idCompany`),
  KEY `idPromo` (`idPromo`),
  CONSTRAINT `theme_ibfk_1` FOREIGN KEY (`idProf`) REFERENCES `enseignant` (`idProf`),
  CONSTRAINT `theme_ibfk_2` FOREIGN KEY (`idCompany`) REFERENCES `entreprise` (`idCompany`),
  CONSTRAINT `theme_ibfk_3` FOREIGN KEY (`idPromo`) REFERENCES `promotion` (`idPromo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `theme`
--

LOCK TABLES `theme` WRITE;
/*!40000 ALTER TABLE `theme` DISABLE KEYS */;
/*!40000 ALTER TABLE `theme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilisateur` (
  `idUser` int NOT NULL,
  `nom` varchar(20) DEFAULT NULL,
  `prenom` varchar(20) DEFAULT NULL,
  `adresse` varchar(50) DEFAULT NULL,
  `dateNaiss` date DEFAULT NULL,
  `lieuNaiss` varchar(50) DEFAULT NULL,
  `wilaya` enum('Adrar','Chlef','Laghouat','Oum El Bouaghi','Batna','Béjaïa','Biskra','Béchar','Blida','Bouria','Tamanrasset','Tébessa','Tlemcen','Tiaret','Tizi Ouzou','Alger','Djelfa','Jijel','Sétif','Saïda','Skikda','Sidi Bel Abbes','Annaba','Guelma','Constantine','Médéa','Mostaganem','M?Sila','Mascara','Ouargla','Oran','El Bayadh','Illizi','Bordj Bou Arreridj','Boumerdés','El Tarf','Tindouf','Tissemslit','El Oued','Khenchela','Souk Ahras','Tipaza','Mila','Defla','Naâma','Aïn Témouchent','Ghardaïa','Relizane','Timimoun','Bordj Badji Mokhtar','Ouled Djellal','Béni Abbés','Salah','Guezzam','Touggourt','Djanet','M?Ghair','Meniaa') DEFAULT NULL,
  `situation` enum('marié','divorcé','célibataire','veuf') DEFAULT NULL,
  `numTelph` varchar(15) DEFAULT NULL,
  `sexe` enum('F','M') DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(150) DEFAULT NULL,
  `activate` tinyint(1) NOT NULL DEFAULT '1',
  `image` varchar(150) DEFAULT NULL,
  `token` varchar(150) DEFAULT NULL,
  `poste` enum('Prof','Etudiant','Admin','Entreprise') DEFAULT NULL,
  `idEtablissement` int DEFAULT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `idUser` (`idUser`),
  UNIQUE KEY `email` (`email`),
  KEY `idEtablissement` (`idEtablissement`),
  CONSTRAINT `utilisateur_ibfk_1` FOREIGN KEY (`idEtablissement`) REFERENCES `etablissement` (`idEtablissement`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateur`
--

LOCK TABLES `utilisateur` WRITE;
/*!40000 ALTER TABLE `utilisateur` DISABLE KEYS */;
INSERT INTO `utilisateur` VALUES (1,'Bensaber','Djamel AMAR','BP N° 73 EL WIAM, 22016, Sidi Bel Abbes, Algerie','1971-01-01','Sidi Bel Abbes','Sidi Bel Abbes',NULL,'048 74 94 50','M','d.bensaber@esi-sba.dz','12345',1,NULL,NULL,NULL,NULL),(19141,'HATTABI','Ibtihel',' N° 141 TEFFAH, Tiaret, Algerie','2001-06-15','Tiaret','Tiaret',NULL,'0558774703','F','i.hattabi@esi-sba.dz','12345',1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `utilisateur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utiliser`
--

DROP TABLE IF EXISTS `utiliser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utiliser` (
  `idTheme` int NOT NULL,
  `idOutil` int NOT NULL,
  PRIMARY KEY (`idTheme`,`idOutil`),
  UNIQUE KEY `idTheme` (`idTheme`),
  UNIQUE KEY `idOutil` (`idOutil`),
  CONSTRAINT `utiliser_ibfk_1` FOREIGN KEY (`idTheme`) REFERENCES `theme` (`idTheme`),
  CONSTRAINT `utiliser_ibfk_2` FOREIGN KEY (`idOutil`) REFERENCES `outil` (`idOutil`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utiliser`
--

LOCK TABLES `utiliser` WRITE;
/*!40000 ALTER TABLE `utiliser` DISABLE KEYS */;
/*!40000 ALTER TABLE `utiliser` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-20 23:03:07
