# POC - CORS

Proof of concept - vunerability opened if https://localhost is enabled as origin in production server - "xtreme go horse programming style" yank and paste rulez!!!!!

Simulates vulnerability opened if CORS permission  is set to localhost , and an exploitable independent app is running on the same server with other user and that user have no permissions to access the main app.


- Main aplication runs on port 80 - user: root, no rw access to the other users CORS.origin = "http://localhost"
- hacked app: linsten on 8081 port and act as bridge to the hacker CORS.origin = "*"
- index.html : endpoint to display the results plase open the console to view the results



## Aux notes:

run with:
docker-compose -f docker-compose.yml up

open index.html with any server


