-- Primero, creamos las tablas sin claves foráneas.
CREATE TABLE games (
    id_juego SERIAL PRIMARY KEY, -- SERIAL para autoincrementar
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    categoria VARCHAR(255),
    edad_recomendada INT,
    jugadores_min INT,
    jugadores_max INT
);

CREATE TABLE users (
    id_usuario SERIAL PRIMARY KEY, -- SERIAL para autoincrementar
    nombre VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE,
    email VARCHAR(255) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    id_favorito INT -- Este campo puede ser una clave foránea si es necesario
);

CREATE TABLE favorites (
    id_favorito SERIAL PRIMARY KEY, -- SERIAL para autoincrementar
    id_usuario INT REFERENCES users(id_usuario), -- Clave foránea para relacionar con users
    id_juego INT REFERENCES games(id_juego) -- Clave foránea para relacionar con games
);

CREATE TABLE reseñas (
    id_reseña SERIAL PRIMARY KEY, -- SERIAL para autoincrementar
    id_usuario INT REFERENCES users(id_usuario), -- Clave foránea
    id_juego INT REFERENCES games(id_juego), -- Clave foránea
    comentario TEXT,
    calificacion INT CHECK (calificacion BETWEEN 1 AND 5),
    fecha DATE
);


-- Luego, agregamos las claves foráneas en las tablas correspondientes.
ALTER TABLE users
    ADD CONSTRAINT fk_users_favorito FOREIGN KEY (id_favorito) REFERENCES favorites(id_favorito);

ALTER TABLE favorites
    ADD CONSTRAINT fk_favorites_usuario FOREIGN KEY (id_usuario) REFERENCES users(id_usuario),
    ADD CONSTRAINT fk_favorites_juego FOREIGN KEY (id_juego) REFERENCES games(id_juego);

ALTER TABLE reseñas
    ADD CONSTRAINT fk_reseñas_usuario FOREIGN KEY (id_usuario) REFERENCES users(id_usuario),
    ADD CONSTRAINT fk_reseñas_juego FOREIGN KEY (id_juego) REFERENCES games(id_juego);


-- Juegos de mesa 

-- 2 Jugadores 

INSERT INTO juegos (nombre, descripcion, categoria, edad_recomendada, jugadores_min, jugadores_max)
VALUES
    ('Ajedrez', 'Un juego clásico de estrategia entre dos jugadores.', 'Estrategia', 6, 2, 2),
    ('Damas', 'Juego de tablero en el que dos jugadores intentan capturar las piezas del otro.', 'Clásico', 6, 2, 2),
    ('Catan: El Duelo', 'Versión para dos jugadores del famoso juego Catan.', 'Estrategia', 10, 2, 2),
    ('Patchwork', 'Un juego de estrategia donde dos jugadores compiten por crear la mejor colcha.', 'Estrategia', 8, 2, 2),
    ('Jaipur', 'Un juego de cartas rápido y estratégico para dos jugadores.', 'Cartas', 12, 2, 2),
    ('7 Wonders Duel', 'Versión para dos jugadores del famoso juego 7 Wonders.', 'Estrategia', 10, 2, 2),
    ('Santorini', 'Juego de construcción en el que dos jugadores compiten por construir torres.', 'Abstracto', 8, 2, 2),
    ('Hive', 'Juego de estrategia abstracta en el que los jugadores intentan rodear a la reina abeja del oponente.', 'Abstracto', 9, 2, 2),
    ('Lost Cities', 'Juego de cartas en el que dos jugadores emprenden expediciones para conseguir puntos.', 'Cartas', 10, 2, 2),
    ('Battle Line', 'Juego de estrategia en el que dos jugadores compiten por controlar formaciones de batalla.', 'Cartas', 12, 2, 2),
    ('Targi', 'Un juego de colocación de trabajadores ambientado en el desierto.', 'Estrategia', 12, 2, 2),
    ('Twilight Struggle', 'Juego estratégico de la Guerra Fría para dos jugadores.', 'Estrategia', 14, 2, 2),
    ('Star Realms', 'Juego de construcción de mazos ambientado en el espacio.', 'Cartas', 12, 2, 2),
    ('War Chest', 'Juego de estrategia abstracta basado en el control del tablero.', 'Estrategia', 10, 2, 2),
    ('Onitama', 'Juego de estrategia abstracta con un toque de ajedrez.', 'Abstracto', 8, 2, 2),
    ('Mr. Jack', 'Juego asimétrico donde un jugador es Jack el Destripador y el otro intenta atraparlo.', 'Estrategia', 9, 2, 2),
    ('Fox in the Forest', 'Un juego de bazas competitivo con un toque mágico.', 'Cartas', 10, 2, 2),
    ('Watergate', 'Juego estratégico que recrea el famoso escándalo político.', 'Estrategia', 12, 2, 2),
    ('Kingdomino Duel', 'Versión para dos jugadores del popular juego Kingdomino.', 'Estrategia', 8, 2, 2),
    ('Codenames: Duet', 'Versión cooperativa para dos jugadores del clásico Codenames.', 'Cooperativo', 10, 2, 2);

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


