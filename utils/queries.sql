-- Crear tabla games
CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    edad_recomendada INT NOT NULL,
    jugadores_min INT NOT NULL,
    jugadores_max INT NOT NULL,
    imagen_url TEXT NULL
);

-- Crear tabla users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE,
    email VARCHAR(255) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL
);

-- Crear tabla favorites
CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL, 
    id_juego INT NOT NULL, 
    CONSTRAINT fk_favorites_usuario FOREIGN KEY (id_usuario) REFERENCES users(id),
    CONSTRAINT fk_favorites_juego FOREIGN KEY (id_juego) REFERENCES games(id)
);

-- Crear tabla reseñas
CREATE TABLE reseñas (
    id SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_juego INT NOT NULL,
    comentario TEXT,
    calificacion INT CHECK (calificacion BETWEEN 1 AND 5),
    fecha DATE,
    CONSTRAINT fk_reseñas_usuario FOREIGN KEY (id_usuario) REFERENCES users(id),
    CONSTRAINT fk_reseñas_juego FOREIGN KEY (id_juego) REFERENCES games(id)
);

-- Clave foránea en la tabla users
-- ALTER TABLE users
--     ADD CONSTRAINT fk_users_favorito FOREIGN KEY (id) REFERENCES favorites(id);

-- Claves foráneas adicionales en la tabla favorites
-- ALTER TABLE favorites
--     ADD CONSTRAINT fk_favorites_usuario FOREIGN KEY (id) REFERENCES users(id),
--     ADD CONSTRAINT fk_favorites_juego FOREIGN KEY (id_juego) REFERENCES games(id);

-- Claves foráneas adicionales en la tabla reseñas
-- ALTER TABLE reseñas
--     ADD CONSTRAINT fk_reseñas_usuario FOREIGN KEY (id) REFERENCES users(id),
--     ADD CONSTRAINT fk_reseñas_juego FOREIGN KEY (id_juego) REFERENCES games(id);

-- ALTER TABLE users
-- ADD COLUMN role VARCHAR(255) NOT NULL DEFAULT 'user';

-- Juegos de mesa 

-- 2 Jugadores 

INSERT INTO juegos (nombre, descripcion, categoria, edad_recomendada, jugadores_min, jugadores_max, imagen_url)
VALUES
    ('Ajedrez', 'Un juego clásico de estrategia entre dos jugadores.', 'Estrategia', 6, 2, 2, 'https://esemtia.com/wp-content/webp-express/webp-images/uploads/2022/06/ajedrez-aula-768x512.jpg.webp'),
    ('Damas', 'Juego de tablero en el que dos jugadores intentan capturar las piezas del otro.', 'Clásico', 6, 2, 2, 'https://fotografias.lasexta.com/clipping/cmsimages01/2021/12/07/0EEC6969-09A7-4A89-94DD-2C0C77DEEC81/98.jpg'),
    ('Catan: El Duelo', 'Versión para dos jugadores del famoso juego Catan.', 'Estrategia', 10, 2, 2, 'https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436017227239-1200-face3d-copy.jpg'),
    ('Patchwork', 'Un juego de estrategia donde dos jugadores compiten por crear la mejor colcha.', 'Estrategia', 8, 2, 2, 'https://www.malditogames.com/wp-content/uploads/2018/01/FT_Patchwork.jpg'),
    ('Jaipur', 'Un juego de cartas rápido y estratégico para dos jugadores.', 'Cartas', 12, 2, 2, 'https://kinuma.com/32988/jaipur-juego-de-cartas-de-negociacion-para-2-jugadores.jpg'),
    ('7 Wonders Duel', 'Versión para dos jugadores del famoso juego 7 Wonders.', 'Estrategia', 10, 2, 2, 'https://cdn.svc.asmodee.net/production-rprod/storage/games/7-wonders-duel/57du-3dmockup-1597826159KUURt.png'),
    ('Santorini', 'Juego de construcción en el que dos jugadores compiten por construir torres.', 'Abstracto', 8, 2, 2, 'https://cdn.svc.asmodee.net/production-rprod/storage/games/7-wonders-duel/57du-3dmockup-1597826159KUURt.png'),
    ('Hive', 'Juego de estrategia abstracta en el que los jugadores intentan rodear a la reina abeja del oponente.', 'Abstracto', 9, 2, 2, 'https://m.media-amazon.com/images/I/61wipf6RidL._AC_UF894,1000_QL80_.jpg'),
    ('Lost Cities', 'Juego de cartas en el que dos jugadores emprenden expediciones para conseguir puntos.', 'Cartas', 10, 2, 2, 'https://ugi-games.com/wp-content/uploads/2022/08/14676-devir-kosmos-lost-cities-exploradores-juego-mesa-cartas-espanol.jpg'),
    ('Battle Line', 'Juego de estrategia en el que dos jugadores compiten por controlar formaciones de batalla.', 'Cartas', 12, 2, 2, 'https://www.kaburi.es/Recursos/Imagenes/Articulos/16405/pic149717.jpg'),
    ('Targi', 'Un juego de colocación de trabajadores ambientado en el desierto.', 'Estrategia', 12, 2, 2, 'https://elmundodelmeeple.com/wp-content/uploads/2022/11/tuareg.jpg'),
    ('Twilight Struggle', 'Juego estratégico de la Guerra Fría para dos jugadores.', 'Estrategia', 14, 2, 2, 'https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436017220780-1200-face3d-copy.jpg'),
    ('Star Realms', 'Juego de construcción de mazos ambientado en el espacio.', 'Cartas', 12, 2, 2, 'https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/8436017222678-1200-face3d-copy.jpg'),
    ('War Chest', 'Juego de estrategia abstracta basado en el control del tablero.', 'Estrategia', 10, 2, 2, 'https://www.malditogames.com/wp-content/uploads/2020/03/FT_WarChest.jpg'),
    ('Onitama', 'Juego de estrategia abstracta con un toque de ajedrez.', 'Abstracto', 8, 2, 2, 'https://www.malditogames.com/wp-content/uploads/2017/11/Frontal-Recorte-Onitma.jpg'),
    ('Mr. Jack', 'Juego asimétrico donde un jugador es Jack el Destripador y el otro intenta atraparlo.', 'Estrategia', 9, 2, 2, 'https://m.media-amazon.com/images/I/61N0S+A3wtL.jpg'),
    ('Fox in the Forest', 'Un juego de bazas competitivo con un toque mágico.', 'Cartas', 10, 2, 2, 'https://m.media-amazon.com/images/I/71vQYociKcL._AC_UF894,1000_QL80_.jpg'),
    ('Watergate', 'Juego estratégico que recrea el famoso escándalo político.', 'Estrategia', 12, 2, 2, 'https://warmusgames.com/wp-content/uploads/2022/12/Watergate-juego-de-mesa.jpg'),
    ('Kingdomino Duel', 'Versión para dos jugadores del popular juego Kingdomino.', 'Estrategia', 8, 2, 2, 'https://blueorangegames.eu/wp-content/uploads/2019/06/KingdominoDuel-3DBox.jpg'),
    ('Codenames: Duet', 'Versión cooperativa para dos jugadores del clásico Codenames.', 'Cooperativo', 10, 2, 2, 'https://m.media-amazon.com/images/I/8176JFVsupL._AC_UF894,1000_QL80_.jpg');

-- 3 jugadores

-- INSERT INTO juegos (nombre, descripcion, categoria, edad_recomendada, jugadores_min, jugadores_max)
-- VALUES
--     ('Catan', 'Un juego de comercio, construcción y estrategia en una isla en desarrollo.', 'Estrategia', 10, 3, 4),
--     ('Dixit', 'Un juego de imaginación y narración con hermosas cartas ilustradas.', 'Party', 8, 3, 6),
--     ('Azul', 'Un juego estratégico de colocación de azulejos con una temática artística.', 'Abstracto', 8, 3, 4),
--     ('King of Tokyo', 'Un juego competitivo donde monstruos luchan por dominar Tokio.', 'Party', 8, 3, 6),
--     ('Carcassonne', 'Juego de colocación de losetas para construir ciudades y caminos medievales.', 'Estrategia', 7, 3, 5),
--     ('Coup', 'Juego de engaño y deducción con roles ocultos.', 'Cartas', 10, 3, 6),
--     ('Saboteur', 'Un juego de roles ocultos donde los jugadores son mineros o saboteadores.', 'Cartas', 8, 3, 10),
--     ('Ticket to Ride', 'Un juego de construcción de rutas ferroviarias a través de diferentes países.', 'Estrategia', 8, 3, 5),
--     ('Wingspan', 'Un juego estratégico de construcción de motores basado en aves.', 'Estrategia', 10, 3, 5),
--     ('Concept', 'Juego cooperativo de adivinanza basado en el uso de símbolos.', 'Party', 10, 3, 12),
--     ('Terraforming Mars', 'Juego estratégico de terraformación de Marte, compite para desarrollar el planeta.', 'Estrategia', 12, 3, 5),
--     ('Exploding Kittens', 'Un juego rápido y divertido de cartas donde debes evitar que te explote un gatito.', 'Cartas', 7, 3, 5),
--     ('The Resistance', 'Juego de roles ocultos donde debes descubrir al traidor.', 'Roles ocultos', 10, 3, 10),
--     ('Between Two Cities', 'Juego estratégico donde colaboras para construir ciudades equilibradas.', 'Estrategia', 8, 3, 7),
--     ('Clank!', 'Juego de construcción de mazos y aventura para encontrar tesoros.', 'Estrategia', 12, 3, 4),
--     ('Just One', 'Juego cooperativo de palabras para adivinar la respuesta correcta.', 'Party', 8, 3, 7),
--     ('Bohnanza', 'Juego de cartas sobre comercio de judías, lleno de interacción entre jugadores.', 'Cartas', 10, 3, 7),
--     ('Love Letter', 'Un juego de deducción y suerte donde debes entregar tu carta de amor.', 'Cartas', 8, 3, 4),
--     ('Mysterium', 'Juego cooperativo donde los jugadores resuelven un misterio a través de pistas visuales.', 'Cooperativo', 10, 3, 7),
--     ('Pandemic', 'Un juego cooperativo donde los jugadores trabajan juntos para detener enfermedades globales.', 'Cooperativo', 8, 3, 4);

-- -- 4 jugadores

-- INSERT INTO juegos (nombre, descripcion, categoria, edad_recomendada, jugadores_min, jugadores_max)
-- VALUES
    ('Codenames', 'Juego de palabras donde equipos compiten por encontrar agentes secretos.', 'Party', 10, 4, 8),
    ('Time’s Up!', 'Juego de adivinanza de palabras con diversión en equipo.', 'Party', 8, 4, 12),
    ('Secret Hitler', 'Juego de roles ocultos donde los jugadores intentan pasar o bloquear políticas.', 'Roles ocultos', 13, 4, 10),
    ('Puerto Rico', 'Juego estratégico de comercio y desarrollo de plantaciones.', 'Estrategia', 12, 4, 5),
    ('Jungle Speed', 'Juego rápido de reflejos para atrapar el tótem.', 'Party', 7, 4, 10),
    ('Werewolf', 'Juego social de roles ocultos donde aldeanos y hombres lobo compiten.', 'Roles ocultos', 10, 4, 18),
    ('Scythe', 'Juego estratégico de conquista y desarrollo en un mundo alternativo.', 'Estrategia', 14, 4, 7),
    ('Taboo', 'Juego de adivinanza de palabras donde ciertas pistas están prohibidas.', 'Party', 12, 4, 10),
    ('Cashflow', 'Juego educativo sobre finanzas y construcción de riqueza.', 'Educativo', 12, 4, 6),
    ('4 en Raya', 'Clásico juego de estrategia abstracta para intentar conectar cuatro fichas.', 'Clásico', 6, 4, 4),
    ('Ticket to Ride: Europa', 'Juego de construcción de rutas ferroviarias en Europa.', 'Estrategia', 8, 4, 5),
    ('Carcassonne: Edición Plus', 'Expansión que amplía la construcción de paisajes medievales.', 'Estrategia', 8, 4, 6),
    ('Spyfall', 'Juego de roles ocultos en el que un jugador es el espía y debe descubrir la ubicación.', 'Roles ocultos', 10, 4, 8),
    ('The Mind', 'Juego cooperativo donde los jugadores intentan sincronizar sus pensamientos.', 'Cooperativo', 8, 4, 4),
    ('Exploding Kittens Party', 'Versión extendida del juego para más jugadores.', 'Cartas', 7, 4, 10),
    ('Wavelength', 'Juego de adivinanza en equipo que gira en torno a conceptos abstractos.', 'Party', 10, 4, 12),
    ('Bang!', 'Juego de roles ocultos ambientado en el salvaje oeste.', 'Cartas', 8, 4, 7),
    ('Camel Up', 'Juego de apuestas donde los jugadores intentan predecir carreras de camellos.', 'Party', 8, 4, 8),
    ('Decrypto', 'Juego de palabras en el que equipos intentan descifrar códigos.', 'Estrategia', 12, 4, 8),
    ('Pictionary', 'Juego clásico de dibujo y adivinanza por equipos.', 'Party', 8, 4, 12);


