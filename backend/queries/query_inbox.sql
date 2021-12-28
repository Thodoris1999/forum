SELECT username,content,date,Users.role_name AS role_name,role_color
FROM PMs
INNER JOIN Users
INNER JOIN Roles
ON Users.email=PMs.author_email AND Users.role_name=Roles.role_name
WHERE recepient_email='nvel18@gmail.com'
ORDER BY date;