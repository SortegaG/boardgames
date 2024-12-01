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
    email VARCHAR(255) UNIQUE NOT NULL
    contraseña VARCHAR(255) NOT NULL,
);

-- Crear tabla favorites
CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES users(id), -- Clave foránea para relacionar con users
    id_juego INT REFERENCES games(id) -- Cambiar id_juego por id
    CONSTRAINT fk_favorites_usuario FOREIGN KEY (id) REFERENCES users(id),
    CONSTRAINT fk_favorites_juego FOREIGN KEY (id_juego) REFERENCES games(id);
);

-- Crear tabla reseñas
CREATE TABLE reseñas (
    id SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES users(id), -- Clave foránea
    id_juego INT REFERENCES games(id), -- Cambiar id_juego por id
    comentario TEXT,
    calificacion INT CHECK (calificacion BETWEEN 1 AND 5),
    fecha DATE
    CONSTRAINT fk_reseñas_usuario FOREIGN KEY (id) REFERENCES users(id)
    CONSTRAINT fk_reseñas_juego FOREIGN KEY (id_juego) REFERENCES games(id);
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
    ('7 Wonders Duel', 'Versión para dos jugadores del famoso juego 7 Wonders.', 'Estrategia', 10, 2, 2, 'data:image/jpeg;base64,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'),
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

INSERT INTO juegos (nombre, descripcion, categoria, edad_recomendada, jugadores_min, jugadores_max)
VALUES
    ('Catan', 'Un juego de comercio, construcción y estrategia en una isla en desarrollo.', 'Estrategia', 10, 3, 4),
    ('Dixit', 'Un juego de imaginación y narración con hermosas cartas ilustradas.', 'Party', 8, 3, 6),
    ('Azul', 'Un juego estratégico de colocación de azulejos con una temática artística.', 'Abstracto', 8, 3, 4),
    ('King of Tokyo', 'Un juego competitivo donde monstruos luchan por dominar Tokio.', 'Party', 8, 3, 6),
    ('Carcassonne', 'Juego de colocación de losetas para construir ciudades y caminos medievales.', 'Estrategia', 7, 3, 5),
    ('Coup', 'Juego de engaño y deducción con roles ocultos.', 'Cartas', 10, 3, 6),
    ('Saboteur', 'Un juego de roles ocultos donde los jugadores son mineros o saboteadores.', 'Cartas', 8, 3, 10),
    ('Ticket to Ride', 'Un juego de construcción de rutas ferroviarias a través de diferentes países.', 'Estrategia', 8, 3, 5),
    ('Wingspan', 'Un juego estratégico de construcción de motores basado en aves.', 'Estrategia', 10, 3, 5),
    ('Concept', 'Juego cooperativo de adivinanza basado en el uso de símbolos.', 'Party', 10, 3, 12),
    ('Terraforming Mars', 'Juego estratégico de terraformación de Marte, compite para desarrollar el planeta.', 'Estrategia', 12, 3, 5),
    ('Exploding Kittens', 'Un juego rápido y divertido de cartas donde debes evitar que te explote un gatito.', 'Cartas', 7, 3, 5),
    ('The Resistance', 'Juego de roles ocultos donde debes descubrir al traidor.', 'Roles ocultos', 10, 3, 10),
    ('Between Two Cities', 'Juego estratégico donde colaboras para construir ciudades equilibradas.', 'Estrategia', 8, 3, 7),
    ('Clank!', 'Juego de construcción de mazos y aventura para encontrar tesoros.', 'Estrategia', 12, 3, 4),
    ('Just One', 'Juego cooperativo de palabras para adivinar la respuesta correcta.', 'Party', 8, 3, 7),
    ('Bohnanza', 'Juego de cartas sobre comercio de judías, lleno de interacción entre jugadores.', 'Cartas', 10, 3, 7),
    ('Love Letter', 'Un juego de deducción y suerte donde debes entregar tu carta de amor.', 'Cartas', 8, 3, 4),
    ('Mysterium', 'Juego cooperativo donde los jugadores resuelven un misterio a través de pistas visuales.', 'Cooperativo', 10, 3, 7),
    ('Pandemic', 'Un juego cooperativo donde los jugadores trabajan juntos para detener enfermedades globales.', 'Cooperativo', 8, 3, 4);

-- 4 jugadores

INSERT INTO juegos (nombre, descripcion, categoria, edad_recomendada, jugadores_min, jugadores_max)
VALUES
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


