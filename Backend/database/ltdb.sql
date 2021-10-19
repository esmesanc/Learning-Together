-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-10-2021 a las 03:39:57
-- Versión del servidor: 10.3.16-MariaDB
-- Versión de PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
  `tipo` varchar(45) NOT NULL,
  `pregunta` varchar(250) NOT NULL,
  `respuesta` varchar(150) NOT NULL,
  `link_audio` varchar(250) NOT NULL,
  `idtopic` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ejercicios`
--

INSERT INTO `ejercicios` (`idejercicios`, `dificultad`, `tipo`, `pregunta`, `respuesta`, `link_audio`, `idtopic`) VALUES
(3, '1', 'seleccion', '33e', 'e33w', 'ddd', 1),
(4, '1', 'escrita', 'r34', '3rwer', 'rw3r', 2),
(5, '2', 'audio', 'efw4', 'qdw', 'qd', 2),
(6, '1', 'audio', 'dweer', 'rewer', 'sefe', 1),
(7, '1', 'seleccion', 'fw34fer', 'gfdtg4', 'dfw4', 1),
(8, '1', 'audio', 'e3sad', '123d', '2e2q', 2),
(9, '1', 'seleccion', 'sdaw', '12es', '2e2s', 2),
(10, '1', 'escrita', 'd23', '231', 'dawe2', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta_audio`
--

CREATE TABLE `pregunta_audio` (
  `idpregunta_audio` int(11) NOT NULL,
  `respuesta_1` varchar(250) DEFAULT NULL,
  `respuesta_2` varchar(250) DEFAULT NULL,
  `respuesta_3` varchar(250) DEFAULT NULL,
  `respuesta_4` varchar(250) DEFAULT NULL,
  `idejer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta_escrita`
--

CREATE TABLE `pregunta_escrita` (
  `idejercicio_escrito` int(11) NOT NULL,
  `respuesta` varchar(250) NOT NULL,
  `idejer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta_seleccion`
--

CREATE TABLE `pregunta_seleccion` (
  `idpregunta_seleccion` int(11) NOT NULL,
  `respuesta_1` varchar(250) DEFAULT NULL,
  `respuesta_2` varchar(250) DEFAULT NULL,
  `respuesta_3` varchar(250) DEFAULT NULL,
  `respuesta_4` varchar(250) DEFAULT NULL,
  `idejer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pregunta_seleccion`
--

INSERT INTO `pregunta_seleccion` (`idpregunta_seleccion`, `respuesta_1`, `respuesta_2`, `respuesta_3`, `respuesta_4`, `idejer`) VALUES
(1, '1234', '123', '12', '1', 3);

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
(1, 'qwer'),
(2, 'qwe'),
(3, 'qw'),
(4, 'q');

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
(7, 'Katsu Gallegos2', 'katsu.gallegos@fartvlo.mx', '$2a$10$MgqBf1fqkNQRVUx4jdQGw.UI3v3yjf7pdWOwek.gNDUGvIzyln36a', 0);

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
-- Indices de la tabla `pregunta_audio`
--
ALTER TABLE `pregunta_audio`
  ADD PRIMARY KEY (`idpregunta_audio`),
  ADD KEY `idejercicio_idx` (`idejer`);

--
-- Indices de la tabla `pregunta_escrita`
--
ALTER TABLE `pregunta_escrita`
  ADD PRIMARY KEY (`idejercicio_escrito`),
  ADD KEY `idejercicio_idx` (`idejer`);

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
  MODIFY `idejercicios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `pregunta_audio`
--
ALTER TABLE `pregunta_audio`
  MODIFY `idpregunta_audio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pregunta_escrita`
--
ALTER TABLE `pregunta_escrita`
  MODIFY `idejercicio_escrito` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pregunta_seleccion`
--
ALTER TABLE `pregunta_seleccion`
  MODIFY `idpregunta_seleccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `topics`
--
ALTER TABLE `topics`
  MODIFY `idtopics` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ejercicios`
--
ALTER TABLE `ejercicios`
  ADD CONSTRAINT `idto` FOREIGN KEY (`idtopic`) REFERENCES `topics` (`idtopics`);

--
-- Filtros para la tabla `pregunta_audio`
--
ALTER TABLE `pregunta_audio`
  ADD CONSTRAINT `idejerci` FOREIGN KEY (`idejer`) REFERENCES `ejercicios` (`idejercicios`);

--
-- Filtros para la tabla `pregunta_escrita`
--
ALTER TABLE `pregunta_escrita`
  ADD CONSTRAINT `idejercicio` FOREIGN KEY (`idejer`) REFERENCES `ejercicios` (`idejercicios`);

--
-- Filtros para la tabla `pregunta_seleccion`
--
ALTER TABLE `pregunta_seleccion`
  ADD CONSTRAINT `idejerciciosele` FOREIGN KEY (`idejer`) REFERENCES `ejercicios` (`idejercicios`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
