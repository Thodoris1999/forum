START TRANSACTION;
INSERT INTO Shouts (date, content, user_email)
VALUES (NOW(), "test2", "ttyr@yahoo.gr");
SET SQL_SAFE_UPDATES=0;
DELETE FROM Shouts WHERE shout_id NOT IN (SELECT * FROM (SELECT shout_id FROM Shouts ORDER BY date DESC LIMIT 15) temp_tab);
SET SQL_SAFE_UPDATES=1;
COMMIT;