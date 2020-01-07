#!/bin/bash

cd /app
nodemon target-server.js &

cd /stupiduserapp
su stupiduser
nodemon badapp.js


