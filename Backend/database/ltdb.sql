-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-11-2021 a las 01:41:38
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ltdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejercicios`
--

CREATE TABLE `ejercicios` (
  `idejercicios` int(11) NOT NULL,
  `dificultad` varchar(45) NOT NULL,
  `pregunta` varchar(250) NOT NULL,
  `respuesta` varchar(150) NOT NULL,
  `idtopic` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ejercicios`
--

INSERT INTO `ejercicios` (`idejercicios`, `dificultad`, `pregunta`, `respuesta`, `idtopic`) VALUES
(1, 'facil', 'I ____ (study) for the exam for three hours.', 'studied', 1),
(2, 'facil', 'They ____ (be) happy to be home.', 'were', 1),
(3, 'facil', 'Sam ____ (stop) the car to take a picture.', 'Stopped', 1),
(4, 'facil', 'Sally was disappointed she____ the party.', 'Missed', 1),
(5, 'medio', 'Dan ____ (not/work) last week.', 'did not work', 2),
(6, 'medio', '____ you ___the dishes?', 'Did /wash', 2),
(7, 'medio', 'I ____ I could fly last night.', 'dreamed', 2),
(8, 'dificil', 'We ____ them at the restaurant', 'Met', 3),
(9, 'dificil', '____you your ___book?', 'Did /find', 3),
(11, 'dificil', 'When I was young, we always ____ (go) to Florida for the summer.', 'Went', 3),
(12, 'facil', 'The phone rang while I (have) ________ breakfast.', 'Was having', 4),
(13, 'facil', 'It (get) dark when I left them at home.', 'was getting', 4),
(14, 'facil', 'He didn\'t steal anything because I (look) at him.', 'was looking', 4),
(15, 'medio', 'They ____ (not/do) their homework yesterday at 3 o\'clock', 'weren\'t doing', 5),
(16, 'medio', 'What ______he_____ on television when you arrived?', 'was / watching', 5),
(17, 'medio', 'Howard ____ (like) the movie.', 'Liked', 5),
(18, 'dificil', 'My parents ____ (work) when I came home', 'were working', 6),
(19, 'dificil', 'In 2010, we ____ (live) in a small flat in London.', 'were living', 6),
(20, 'dificil', 'She ____ (listen) to music when I called.', 'was listening', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta_seleccion`
--

CREATE TABLE `pregunta_seleccion` (
  `idpregunta_seleccion` int(11) NOT NULL,
  `respuesta_1` varchar(250) NOT NULL,
  `respuesta_2` varchar(250) NOT NULL,
  `respuesta_3` varchar(250) NOT NULL,
  `idejer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pregunta_seleccion`
--

INSERT INTO `pregunta_seleccion` (`idpregunta_seleccion`, `respuesta_1`, `respuesta_2`, `respuesta_3`, `idejer`) VALUES
(1, 'Stopped', 'to stop', 'stopping', 1),
(2, 'studied', 'study', 'studying', 2),
(3, 'be', 'that', 'were', 3),
(4, 'Omitted', 'Missed', 'skipped', 4),
(5, 'did not work', 'not work', 'has not work', 5),
(6, 'Did /wash', 'Were/we', 'Wash/not', 6),
(7, 'dreamed', 'dream', 'dreaming', 7),
(8, 'Met', 'Meet', 'Meeting', 8),
(9, 'Did not/find', 'Did/finding', 'Did /find', 9),
(10, 'Went', 'Was', 'be', 11),
(12, 'Were have', 'Was having', 'Was have', 12),
(13, 'Were get', 'getting', 'was getting', 13),
(14, 'Look', 'was looking', 'were look', 14),
(15, 'was not', 'weren\'t doing', 'was not doing', 15),
(16, 'were/watch', 'were watching', 'was / watching', 16),
(17, 'Liked', 'Like', 'Liking', 17),
(18, 'was work', 'were working', 'working', 18),
(19, ' were live', 'was living', 'were living', 19),
(20, 'was listening', 'was listen', 'were listening', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `topics`
--

CREATE TABLE `topics` (
  `idtopics` int(11) NOT NULL,
  `nombre_topic` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `topics`
--

INSERT INTO `topics` (`idtopics`, `nombre_topic`) VALUES
(1, 'Past Simple level1'),
(2, 'Past Simple level2'),
(3, 'Past Simple level3'),
(4, 'Past Continuos level1'),
(5, 'Past Continuos level2'),
(6, 'Past Continuos level3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL,
  `nombre_usuario` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `puntaje` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idusuario`, `nombre_usuario`, `correo`, `contrasena`, `puntaje`) VALUES
(7, 'esme12e', 'esmesanc1206@gmail.com', 'esme#E12', 0),
(8, 'esme12', 'esmesan1206@gmail.com', '$2a$10$UBzD5HqP58hmi8h2kK5n/OASq1Z8rXqOjj5lXPqBnh/GpKlzlfhnW', 0),
(9, 'migue', 'miguel12@gmail.com', '$2a$10$fIqdi3elazJeDNqS8KuXxOwbdxOj/mhxlRd4v7ZmtZaHGieAMhFim', 0),
(10, 'Amix', 'amix12@gmail.com', '$2a$10$rFRtG0QXat9HdfXmZRbwGudekEVvYL4Mk4IgSwSw5M3o6efD1Wajq', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ejercicios`
--
ALTER TABLE `ejercicios`
  ADD PRIMARY KEY (`idejercicios`),
  ADD KEY `idto_idx` (`idtopic`);

--
-- Indices de la tabla `pregunta_seleccion`
--
ALTER TABLE `pregunta_seleccion`
  ADD PRIMARY KEY (`idpregunta_seleccion`),
  ADD KEY `idejercicio_idx` (`idejer`);

--
-- Indices de la tabla `topics`
--
ALTER TABLE `topics`
  ADD PRIMARY KEY (`idtopics`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idusuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ejercicios`
--
ALTER TABLE `ejercicios`
  MODIFY `idejercicios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `pregunta_seleccion`
--
ALTER TABLE `pregunta_seleccion`
  MODIFY `idpregunta_seleccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `topics`
--
ALTER TABLE `topics`
  MODIFY `idtopics` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ejercicios`
--
ALTER TABLE `ejercicios`
  ADD CONSTRAINT `idto` FOREIGN KEY (`idtopic`) REFERENCES `topics` (`idtopics`);

--
-- Filtros para la tabla `pregunta_seleccion`
--
ALTER TABLE `pregunta_seleccion`
  ADD CONSTRAINT `idejerciciosele` FOREIGN KEY (`idejer`) REFERENCES `ejercicios` (`idejercicios`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
