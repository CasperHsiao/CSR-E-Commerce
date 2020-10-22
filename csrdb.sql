-- Author: Casper Hsiao
-- Last updated: 08.20.19
-- Creates a sneaker table of sneaker information for the CSR database, csrdb.


CREATE TABLE sneakers (
  id             INT PRIMARY KEY AUTO_INCREMENT,
  name           VARCHAR(50) NOT NULL,
  price          INT NOT NULL,
  sizes          VARCHAR(50) DEFAULT "8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14",
  category       VARCHAR(25) NOT NULL,
  description    VARCHAR(500) NOT NULL
);

INSERT INTO `sneakers` (`id`, `name`, `price`, `sizes`, `category`, `description`) VALUES
(1, 'Nike_Air_Max_97_QS', 180, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14', '-men', 'With a sleek
  design inspired by the high-speed Japanese Bullet Train, the Nike Air Max 97 continues to be a
  favorite among sneakerheads. They\'re constructed with a combination leather and textile upper,
  full-length visible Max Air unit, reflective lines around the upper, and a rubber outsole.'),
(2, 'Nike_Air_Max_97_Ultra_17', 160, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14', '-men', 'A
  modified take on the original, the Nike Air Max 97 Ultra \'17 is a sleeker and lighter. They are
  constructed with a mesh upper, features welded overlays, phylon midsole, full-length Max Air
  unit, and a rubber outsole.'),
(3, 'Nike_Air_Vapormax_Flyknit_3', 190, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14', '-men',
  'Advanced and innovative, the Nike Air VaporMax Flyknit 3 is an ultra light sneaker that offers
  exceptional comfort and support. They are crafted with a flexible Flyknit upper, feature VaporMax
  that was designed to provide Air in the exact placement where its needed, Flywire cables that
  integrate with the laces, and a skin overlay on the heel counter.'),
(4, 'Nike_Kobe_AD', 140, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14', '-men', 'The Nike Kobe A.D.
  was precisely designed with low-profile responsiveness, dynamic comfort, flexible movement. They
  are crafted with a lightweight upper, feature Flywire technology, Zoom Air heel unit, slip-on
  construction, and a multi-directional pattern on the outsole.'),
(5, 'Nike_Kobe_IV_Protro-Draft_Day', 175, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14',
  '-men-featured', 'In the 1996 NBA Draft, the Charlotte Hornets used their 13th pick to scoop up
  Kobe Bryant, and quickly traded him to the Los Angeles Lakers. This Nike Zoom Kobe IV
  \"Draft Day\" was inspired by that pick. They sport a white upper with purple and teal accents,
  Flywire construction, Zoom Air technology, and the draft day \"6-11-96\" printed on the heel.'),
(6, 'Nike_Kyrie_5-Have_A_Nike_Day', 130, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14',
  '-men-featured', 'Kyrie Irving\'s fifth signature sneaker, the Nike Kyrie 5 is equipped with Air
  Zoom Turbo for rapid energy return. This advanced basketball model also has an upper constructed
  of engineered fabric, a flytrap-inspired overlay, Flywire cables, curved traction, and an inner
  sleeve for lockdown support. Plus, the limited \"FRIENDS\" model commemorates the 90\'s sitcom
  with bright color accents inspired by the sitcom\'s logo.'),
(7, 'Nike_LeBron_XVI-Medicine_Ball', 200, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14',
  '-men-featured', 'The longest-running active player with a signature sneaker, LeBron\'s latest is
  the Nike LeBron XVI. Equipped with a Battleknit 2.0 upper, they also feature a lower cut compared
  to previous models, integrated Flywire cables, combination Max Air and Zoom Air cushioning
  system, internal Achilles support, and rubber outsole with modified herringbone traction pattern.
  This limited \"Medicine Ball\" version also has a colorway and strap inspired by Bo Jackson’s
  Nike Air Trainer 3, originally released in 1988.'),
(8, 'Nike_PG_3-BHM', 110, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14', '-men-featured',
  'Paul George\'s latest lightweight signature model, the Nike PG3 is built to excel on the
  hardwood. Featuring a mesh upper with synthetic overlays, they also have an integrated tongue
  design, Zoom Air cushioning, and multi-directional traction on the outsole. This \"Black History
  Month\" edition features a design inspired by the culture of the Congo, including colorful woven
  pattern, and metallic gold accents.'),
(9, 'Nike_React_Element_87', 160, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14', '-men', 'Equipped
  with React cushioning technology, the Nike React Element 87 is a futuristic looking model with
  that provides exceptional comfort. They are constructed with a translucent TPE yarn textile
  upper, asymmetrical tongue, and rubber outsole pods.'),
(10, 'Nike_Women_Air_Max_95', 160, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14', '-women',
  'Released in 1995, the Nike Air Max 95 was an instant hit, and is still popular today. The
  human anatomy was used as an inspiration for its design, with mesh simulating the skin,
  graduating side panels resembling the muscles, lace loops depicting the ribs, and the midsole
  representing the spine. But, the Nike Air Max 95 is not just known for its looks, it\'s also the
  first Nike sneaker to feature Air Max cushioning in the heel and forefoot.'),
(11, 'Nike_Women_Air_Max_97_Ultra_17', 160, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14', '-women',
  'A modified take on the original, the Nike Air Max 97 Ultra \'17 is a sleeker and lighter. They
  are constructed with a combination of materials on the upper, phylon midsole, full-length Max Air
  unit, and a rubber outsole.'),
(12, 'Nike_Women_Air_Max_97', 160, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14', '-women', 'With a
  sleek design inspired by the high-speed Japanese Bullet Train, the Nike Air Max 97 continues to
  be a favorite among sneakerheads. They\'re constructed with a combination leather and textile
  upper, full-length visible Max Air unit, reflective lines around the upper, and a rubber
  outsole.'),
(13, 'Nike_Women_Air_Max_270_React-Bauhaus', 150, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14',
  '-women', 'The Nike Air Max 270 React combines some of Nike\'s latest cushioning innovations to
  create an ultra comfortable and supportive sneaker. They\'re constructed with a multi-layered
    no-sew textile upper, feature React cushioning, a 270 Max Air heel unit, rope laces, heel pull
    tab, and a rubber outsole. Plus, this \"Bauhaus\" edition has a colorway inspired by the
    German design school.'),
(14, 'Nike_Women_Huarache_City_Low', 120, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14', '-women',
  'The Nike Huarache is an ultra comfortable running sneaker that was originally released in 1991.
  This modified \" City Low\" version features a combination materials on the upper, customized
  lacing system, pull tabs, alternate heel straps, and a rubber outsole.'),
(15, 'Nike_Zoom_KD12-Warriors_Home', 150, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14',
  '-men-featured', 'The twelfth signature sneaker for NBA superstar Kevin Durant offers a
  personalized fit for everyone that laces them up. They achieve this with a strobel-stitched
  upper, quad-axial Flywire, Zoom Air cushioning, lateral TPU for stability, and multi=directional
  traction on the outsole.'),
(16, 'Nike_Hyperdunk_2015', 140, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14', '-men-sale',
  'The 2015 version of the popular Nike Hyperdunk features new styling and innovation that will
  enhance your game on the court. They are constructed with a lightweight Hyperfuse upper,
  internal bootie, dynamic collar, Zoom cushioning, Flywire technology, and a rubber outsole
  with herringbone traction pattern.'),
(17, 'Nike_Women_Roshe_One', 75, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14', '-women-sale',
  'The Roshe One is an extremely comfortable, breathable, and fashionable model. They have a
  minimalist design with a full mesh upper, phylon midsole, inner sleeve, padded collar, heel pull
  tab, Solarsoft insole, and a modified Waffle pattern on the outsole.'),
(18, 'Nike_SB_Stefan_Janoski_Max_Leather', 110, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14',
  '-men-sale', 'Lightweight and comfortable with a simple style that\'s on point, the Nike SB
  Stefan Janoski Max has everything you\'re looking for. They also have a leather upper with
  one-piece construction, phylon midsole, visible Max Air unit, deep flex grooves, and solid
  rubber pods on the outsole.'),
(19, 'Nike_Zoom_Hyperquickness_2015', 110, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14',
  '-men-sale', 'The 2015 version of the Nike Zoom Hyperquickness has lightweight construction,
  Flywire cables for support, and Zoom Air for responsive cushioning. They are built with a
  textile upper, structural overlays, asymmetrical lacing system, and a rubber outsole with
  modified herringbone pattern.'),
(20, 'Nike_Women_Air_Max_1_Premium', 120, '8-8.5-9-9.5-10-10.5-11-11.5-12-12.5-13-14',
  '-women-sale', 'The Nike Air Max 1, which made its debut in 1987, is known for being the first
  Nike model to reveal Nike\'s Air Max technology. Developed by an independent inventor (who was
    originally turned down by Adidas), Air Max technology provides superior cushioning and impact
    absorption, which is critical for runners. The Air Max 1 was also designed with a
    nylon/synthetic upper for lockdown support and excellent ventilation.');

CREATE TABLE faq (
  id             INT PRIMARY KEY AUTO_INCREMENT,
  question       VARCHAR(255) NOT NULL,
  answer         VARCHAR(225) NOT NULL
);

INSERT INTO `faq` (`id`, `question`, `answer`) VALUES
(1, 'What is CSR?', 'CSR is a sneaker retail corporation founded in 2019, based in Seattle,
  Washington.'),
(2, 'What does CSR stand for?', 'CSR stands for Chum\'s Sneaker Retail. '),
(3, 'How are the sneaker prices determined?', 'The sneaker prices are set by the individual sellers
  and CSR. The sneaker price display includes the cost of the sneaker, service fee, and shipment
  fee.'),
(4, 'What are the sneaker brands on CSR?', 'CSR currently sells Nike brand sneakers only. More
  sneaker brands will be included in the future.'),
(5, 'How do I know if the sneakers on CSR are not \'fake\'?', 'All sneakers on CSR are verified
  by CSR sneaker professionals. We ensure that all sneakers are as real as our brand is.');

CREATE TABLE feedback (
  id              INT PRIMARY KEY AUTO_INCREMENT,
  feedback        VARCHAR(1000) NOT NULL
);
