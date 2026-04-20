CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  email VARCHAR(30),
  age INT,
  admission_date DATE
);

-- DESC students;

INSERT INTO students(student_id, name, email, age, admission_date) 
VALUES (1, 'priyasha.yadav.cg@gmail.com','Priyasha', 20, '2025-10-18'),
(2, 'Khushi','khushi.rajput.cg@gmail.com', 18, '2025-10-18'),
(3, 'Vanshika','vanshika.jangam.cg@gmail.com', 20, '2025-10-18'),
(4, 'Krish','krish.shyara.cg@gmail.com', 19, '2025-10-18'),
(5, 'Dhruvesh','dhruvesh.shyara.cg@gmail.com', 21, '2025-10-18')
;
SELECT * FROM students;

UPDATE students SET name = 'Priyasha 💀' WHERE student_id = 1;
UPDATE students SET email = 'priyasha.yadav.cg@gmail.com' WHERE student_id = 1;
SELECT * FROM students;

SELECT name FROM students;
SELECT student_id, email FROM students;

SELECT name, email FROM students WHERE student_id = 1;
SELECT name FROM students WHERE student_id = 2;

-- CREATE A TABLE SIGNUP FOR YOUR ECOMMERCE WEBSITE
-- FIRSTNAME LASTNAME MOBILENUMBER EMAIL PASSWORD ADDRESS

CREATE TABLE signup(first_name VARCHAR(20), last_name VARCHAR(20), mob CHAR(12), email VARCHAR(100), password VARCHAR(100), address TEXT);
insert into signup (first_name, last_name, mob, email, password, address) values ('Corri', 'Gasticke', '515-347-9156', 'cgasticke0@altervista.org', '$2a$04$fLyS0AwfE6B7QHvw.2JYzeF/oWVqLYkQPEaPNxecd3DiUyzI6Cbau', 'CL JOSÉ MARÍA SARGET 29');
insert into signup (first_name, last_name, mob, email, password, address) values ('Aloise', 'Andrei', '122-704-3904', 'aandrei1@usnews.com', '$2a$04$hMZKEcd.8uLN0udd3DBT.eCkflEKm8wMcrZE.QrYfLnxYkhpipyHO', '37 BUSINESS COURT');
insert into signup (first_name, last_name, mob, email, password, address) values ('Arley', 'Loughrey', '723-888-2712', 'aloughrey2@yellowpages.com', '$2a$04$hAG3HiD.vzIwabFbYeN.0OdY5jE0aA.yzPmEPivVaFQ2f8lA/n6W.', 'PO BOX 1578');
insert into signup (first_name, last_name, mob, email, password, address) values ('Kennie', 'Messier', '445-880-4827', 'kmessier3@netvibes.com', '$2a$04$w10oFDKj.xpcchB.3pmn1OEZef9sd9WN8elurJLKyJVcwy3BNS0h.', '210 N. MAIN');
insert into signup (first_name, last_name, mob, email, password, address) values ('Tobit', 'Pampling', '955-937-0179', 'tpampling4@microsoft.com', '$2a$04$BnDsZtCTvzqKiqF2rOVsHuz99I/5TOETTiYvIinAeJyMguk1mstS.', '99 NORTH STREET');
insert into signup (first_name, last_name, mob, email, password, address) values ('Olympia', 'Burde', '662-257-8563', 'oburde5@blog.com', '$2a$04$A4xRf1FZwigv9oYwkd4el.SbS.SagcdwGMpMcGv2YiIvw6BAcioaO', 'Marchfelder-Platz, 1-2');
insert into signup (first_name, last_name, mob, email, password, address) values ('Katuscha', 'Pastor', '808-344-7252', 'kpastor6@nydailynews.com', '$2a$04$Wi.4n6T/NJN0dZEwSpumBeiBU6tt0gNnxf8DMINqJnAXgAXQahfGu', 'PIAZZA DEL CALENDARIO, 3');
insert into signup (first_name, last_name, mob, email, password, address) values ('Dion', 'Steptowe', '904-147-5506', 'dsteptowe7@dagondesign.com', '$2a$04$sf7yOkX2IZSWKF1Af.GD9OmenD3unAKbS6f3KudzbPzr9paDlJRki', '9300 FLAIR DRIVE  4TH FLOOR');
insert into signup (first_name, last_name, mob, email, password, address) values ('Chrissie', 'Skilling', '984-651-9505', 'cskilling8@ow.ly', '$2a$04$R2R4lg1ObUnYDt/aT0ygR.f/ZA.BgrJT7C/jwfpM5PVF8xoDiZTLS', '291, route d''Arlon');
insert into signup (first_name, last_name, mob, email, password, address) values ('Jannel', 'Annion', '716-736-1633', 'jannion9@unicef.org', '$2a$04$1pDORjbyU8HgTgQgZifKouAkAC3EArqHcxQMMcrN1hbUrzzpA37Dq', 'Av de Santa Marina 15');
insert into signup (first_name, last_name, mob, email, password, address) values ('Milli', 'Corstorphine', '915-840-8870', 'mcorstorphinea@nationalgeographic.com', '$2a$04$1/zEdR7M7ym58Jh9DJmynuyKMi5Za2tMZQ6NuW0.ZcFLxNFiwUli2', 'Schillerstraße 22');
insert into signup (first_name, last_name, mob, email, password, address) values ('Brok', 'Omrod', '653-562-6516', 'bomrodb@sciencedirect.com', '$2a$04$UGOnHXBrt7bufKDy800nCu7N1dxykLE/kts7t4whRT/VKJ.blaHQK', 'CORSO SICCARDI, 13');
insert into signup (first_name, last_name, mob, email, password, address) values ('Carlynne', 'Sumers', '385-680-1788', 'csumersc@bandcamp.com', '$2a$04$tPTqSrhyfLiXYtpcl5ir0u5Sfvv8EuBRvI0LMHtJ5ifam6VqWIeGy', 'P.O. BOX 85139');
insert into signup (first_name, last_name, mob, email, password, address) values ('Florina', 'Brosi', '976-366-2432', 'fbrosid@army.mil', '$2a$04$AMgjPW5W6EvHcJpH3Xgq6.HySUUGFuAawNk6F7eL97xAqkocaEQjq', 'Ansbacher Straße 34');
insert into signup (first_name, last_name, mob, email, password, address) values ('Tatiania', 'Francello', '508-607-7076', 'tfrancelloe@businessinsider.com', '$2a$04$UYYiJkGqhymduxkDyXFxWu2h5kHb7JUc1Sv91I99Q3fm4wnrezZ1G', 'MAC N9301-041');
insert into signup (first_name, last_name, mob, email, password, address) values ('Revkah', 'Jobke', '225-480-9193', 'rjobkef@chronoengine.com', '$2a$04$Sho027mHBMr683OpYjwomelMTJqkeNt6wbH0MumZ.UlQzAtPSOkJ2', '99 NORTH ST');
insert into signup (first_name, last_name, mob, email, password, address) values ('Oliviero', 'Musicka', '785-574-6611', 'omusickag@businessweek.com', '$2a$04$KLeMXHc8pfkVjUHIKHumJO6s0zTx1NuFL0N4Z5yL70M6qVt08oRO.', 'P7-PFSC-03-H');
insert into signup (first_name, last_name, mob, email, password, address) values ('Cristiano', 'Davidzon', '314-709-6367', 'cdavidzonh@uiuc.edu', '$2a$04$fo.RVZcYBzcUi.lqaVuCge90NHw.ehOJ6MklHgYJ.qyaNxu9mNdmO', 'Rothschildplatz, 1');
insert into signup (first_name, last_name, mob, email, password, address) values ('Debbie', 'Witz', '388-632-1501', 'dwitzi@nyu.edu', '$2a$04$g/gVf1hmY0KziuZ50bLYAOUKqEBNFv6j2AXBeiWTccrhEwfrXuzsu', 'VIA BRA, 15');
insert into signup (first_name, last_name, mob, email, password, address) values ('Patrizio', 'MacElharge', '310-664-7930', 'pmacelhargej@cargocollective.com', '$2a$04$sAqTnzwQrT4TlJq6MHcQvOKWWeoU1AkN.WU8rw1vJrarzLB/v7tsm', '814 MAIN STREET');
insert into signup (first_name, last_name, mob, email, password, address) values ('Gregoire', 'Fludgate', '589-398-4145', 'gfludgatek@craigslist.org', '$2a$04$xj/IcGym9yh9hBV8vgMJQe6AGEXnlVda896lcmYtynAoesqgj6WcS', 'Přemyslovská 2845/43');
insert into signup (first_name, last_name, mob, email, password, address) values ('Barb', 'Chittock', '728-129-6137', 'bchittockl@engadget.com', '$2a$04$5fpxsXgHFbEQFzYSrQ9jXuKpbLAGghfBTgvd0NjANSJmqSQcZUqTi', 'PARC DE LA HAUTE BORNE 61 AVENUE HALLEY');
insert into signup (first_name, last_name, mob, email, password, address) values ('Adlai', 'Friary', '761-214-9214', 'afriarym@sciencedaily.com', '$2a$04$r.ggtEeHiwJxZ25KCHHY0O4wBD7mjApijwg76L1T96asxBA.KTb5y', '218 S GLENSTONE');
insert into signup (first_name, last_name, mob, email, password, address) values ('Price', 'Green', '241-627-0991', 'pgreenn@guardian.co.uk', '$2a$04$gPoc5reIbEY3y1bWvuCY3eBMQjBl2iVhK3/kHKM2v6CTFMGDKD1sO', '1200 E. WARRENVILLE ROAD');
insert into signup (first_name, last_name, mob, email, password, address) values ('Lita', 'Dionisio', '600-482-7514', 'ldionisioo@zimbio.com', '$2a$04$kd/rd5afESi0M8gyl6F8DeGROWNE/0VqMGNY3d8BVe8pRUqBYUUEm', 'Europaplatz 5');
insert into signup (first_name, last_name, mob, email, password, address) values ('Algernon', 'Skeene', '313-674-7438', 'askeenep@ask.com', '$2a$04$Y.8dSqbGbhsilj0T6d/wUOhTPzUgDqGK/uEzUtzfuocQ4.NCYGUDS', 'P O BOX 7009');
insert into signup (first_name, last_name, mob, email, password, address) values ('Mia', 'Cafferty', '805-304-5185', 'mcaffertyq@devhub.com', '$2a$04$clMCX0LriU3gBww1exarjeHJHkNDwjY5D2mhrRxbPsQiLsA0OZaay', 'Nieheimer Straße 14');
insert into signup (first_name, last_name, mob, email, password, address) values ('Brigham', 'Faircley', '403-949-5777', 'bfaircleyr@sohu.com', '$2a$04$1sHeTjGh9jWoQbskBgFxj.V0ns9iTsxpnWIp5J0n7o6YfBTB3WhR.', 'Rákóczi út 70-72.');
insert into signup (first_name, last_name, mob, email, password, address) values ('Cherish', 'Tibbits', '782-319-4222', 'ctibbitss@slate.com', '$2a$04$KPGaAll/kcxVpkjiPZXJNey2WLAieiv1Y90vEJAyi1Gfe.EaEOpjS', '458 COLORADO AVENUE');
insert into signup (first_name, last_name, mob, email, password, address) values ('Rolland', 'Philpot', '988-426-4577', 'rphilpott@patch.com', '$2a$04$pirA.gqNLhOMfM5QL1yx8OLvErxUNEzE.7cP9g6cZCQvnEbfO.7Jy', 'P.O. BOX 681');
insert into signup (first_name, last_name, mob, email, password, address) values ('Eldon', 'Ryde', '681-994-4867', 'erydeu@boston.com', '$2a$04$6ZR4yH5ZnizrDywCfD2yf.4Aw2y6jTU6RBflH/DaZWDBaM7cnJlVK', '411 THEODORE FREMD AVE SUITE 350');
insert into signup (first_name, last_name, mob, email, password, address) values ('Pepito', 'Whiscard', '671-441-7627', 'pwhiscardv@ning.com', '$2a$04$j3zyuwWs9IZjYebq6/RrRe.c2Do509sZ1U5kCgySZdidOMseVQSl2', 'ul. 1-go Maja 23');
insert into signup (first_name, last_name, mob, email, password, address) values ('Janos', 'Gilsthorpe', '200-550-1509', 'jgilsthorpew@goo.gl', '$2a$04$RjA1WbqLFjxmBedT/0iykOUZUcaKVc7AM8MqjgyynPCSz.7dflAtO', 'Am Münster 29');
insert into signup (first_name, last_name, mob, email, password, address) values ('Boone', 'Saggs', '505-333-0246', 'bsaggsx@ning.com', '$2a$04$9wm0ufb1.7YV1utwoDNmWelmv5zN3/sQETXkOKy9Ob1u5LqRMAZ02', 'P O BOX 290');
insert into signup (first_name, last_name, mob, email, password, address) values ('Filip', 'Kanwell', '980-112-2597', 'fkanwelly@businessinsider.com', '$2a$04$dqY1GQKJhfDW/40i9g49u.15yzQmIUQB4MCNnqnVc1K4YglHH53YS', 'P O BOX 291');
insert into signup (first_name, last_name, mob, email, password, address) values ('Sibley', 'Seymark', '443-915-4888', 'sseymarkz@springer.com', '$2a$04$FIE0stxQGIUK8d1Eo2/cwebLAhlhUq1aI92AmCqsRzD60z97w8Ikm', '56, 58 AVENUE ANDRE MALRAUX');
insert into signup (first_name, last_name, mob, email, password, address) values ('Demetra', 'Rimell', '460-141-0787', 'drimell10@wikispaces.com', '$2a$04$dFOMnAACEez19yJJzpFeX.vhKNtzZIbq6/JXqSVQO0agUl0F4B2ju', '436 SLATER RD');
insert into signup (first_name, last_name, mob, email, password, address) values ('Ike', 'Grabb', '811-217-4196', 'igrabb11@nsw.gov.au', '$2a$04$aNeJMkkWgyx/ia6llq4PUOoy5TMqWV5yJcWN4XMA4BkiLsPDYvxzu', 'P.O. BOX 190');
insert into signup (first_name, last_name, mob, email, password, address) values ('Gottfried', 'Spelsbury', '970-362-0351', 'gspelsbury12@blinklist.com', '$2a$04$z1XTdOGXSKPWGeTtwue5HOQebozgC66z5ppsj6o7N3iokapzV5be.', 'CL LAS CRUCES 33');
insert into signup (first_name, last_name, mob, email, password, address) values ('Austin', 'McKeran', '409-991-0470', 'amckeran13@soundcloud.com', '$2a$04$WxlexLLxT/dUUuFWIXhfL..P0EvZMtqXAiG12ZzXdGcovvlBzLLB2', 'Dr.-Theodor-Neubauer-Straße 44');
insert into signup (first_name, last_name, mob, email, password, address) values ('Krisha', 'Gath', '688-277-1321', 'kgath14@ibm.com', '$2a$04$KvKZ9LKA64T2C77HRq9OHOJRPOrEBROG7XMDGZeQeFYeJoQQf.Rmq', 'P.O. BOX 190');
insert into signup (first_name, last_name, mob, email, password, address) values ('Carrissa', 'Mithon', '495-510-5620', 'cmithon15@baidu.com', '$2a$04$wIkOdgwNx2YhTgTXFPlPY.97JxUr77vp1f7i0OI2djq7MzCGhrhQu', '209 EAST GRAVIS');
insert into signup (first_name, last_name, mob, email, password, address) values ('Erl', 'Imlock', '740-949-0971', 'eimlock16@alibaba.com', '$2a$04$TwI2bFCdu.8D83cSIuwgpehoLkVymEvQc.YW4aSqiQN5BbZLfKyii', 'ACH OPERATIONS 100-99-04-10');
insert into signup (first_name, last_name, mob, email, password, address) values ('Giselbert', 'Ambrosch', '823-291-3824', 'gambrosch17@slate.com', '$2a$04$/A5KTg5J5HSPrKQG0Rp9wefJMAyXwXPO0WCG7INM6/ehHo4GSSkUe', 'Tenter Weg 1-3');
insert into signup (first_name, last_name, mob, email, password, address) values ('Briney', 'McDougle', '590-385-8539', 'bmcdougle18@amazon.de', '$2a$04$WoJ5gvXyaX/Uk7ffQDmvF./sFsEj.J4Ak0p.TX4srh1yC3X9iDUdC', '3727 ARLINGTON AVENUE');
insert into signup (first_name, last_name, mob, email, password, address) values ('Kristian', 'Brodest', '647-885-8895', 'kbrodest19@bloomberg.com', '$2a$04$iJ8r3CiaJtaZhnMdSEM3E.xMWUJ3ayOdm8YHYLgGVwVUt/7eSMC9W', 'NY-31-17-0119');
insert into signup (first_name, last_name, mob, email, password, address) values ('Gretta', 'Cass', '329-869-9902', 'gcass1a@utexas.edu', '$2a$04$7yw9Sq8V.jxAOc5j84QC7uRFDVCc.R30.t3qZvj9obkv394TaDB3q', 'VIA VISINI, 2 (ANG.VIA UDINE)');
insert into signup (first_name, last_name, mob, email, password, address) values ('Ferrel', 'Bettenson', '351-947-6194', 'fbettenson1b@cdc.gov', '$2a$04$R8ehv9sd7RNI7E.iMgrxf.etlwkokiNLWZxPpU64ywej/Xwt3MZMS', '1200 E WARRENVILLE RD');
insert into signup (first_name, last_name, mob, email, password, address) values ('Paolo', 'Titchmarsh', '915-120-9871', 'ptitchmarsh1c@youku.com', '$2a$04$i0ASotiVX58F9jQecRII9.FofB9eJeJwrqZ/wdSIx6c4B6DYkpvv6', '1001 LAKE STREET');
insert into signup (first_name, last_name, mob, email, password, address) values ('Henderson', 'Thornewill', '591-466-3908', 'hthornewill1d@zdnet.com', '$2a$04$g9m2zAK9HzAm8cmf/VX8WO.LimTxFDftuSIczfrIpD5d9FA62Uyla', 'CL TRINIDAD, 20');


SELECT * FROM signup WHERE address = 'P.O. BOX 190' OR last_name = 'Thornewill';
SELECT * FROM signup WHERE address = '37 BUSINESS COURT' AND first_name = 'Aloise';
