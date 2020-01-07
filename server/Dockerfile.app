FROM node:12

# target app
#
RUN mkdir app stupiduserapp scripts
# dont permit other users do acces the main app

RUN npm install -g nodemon

RUN chmod 700 /app
WORKDIR /app
COPY /app ./
WORKDIR /scripts
COPY /scripts ./
RUN npm install
EXPOSE 80

RUN nohup node server.js &
# stupid user with vulnerability

RUN useradd stupid-user
WORKDIR /stupiduserapp

COPY /stupiduserapp ./

RUN chown stupid-user: /stupiduserapp -R

RUN npm install

WORKDIR /scripts

# USER stupid-user


#  CMD [ "node", "server.js" ]

