#!/bin/sh
# export mongoServer=mongodb://localhost:27017/opem
export mongoServer=mongodb+srv://marioimperato:Y7csjKg4l4c1egiA@maidevfundamentalsclust.x5i5iii.mongodb.net/r3ng
# export mongoServer=mongodb+srv://gpa:gpa@mongo.gpagroup.it/opem_mig_wip?tls=false


mongosh $mongoServer --file 01-r3ng-domain.js
mongosh $mongoServer --file 02-r3ng-site.js
mongosh $mongoServer --file 03-r3ng-user.js

mongosh $mongoServer --file 04-r3ng-system-kv.js
mongosh $mongoServer --file 05-r3ng-session.js

mongosh $mongoServer --file 06-r3ng-sequences.js
mongosh $mongoServer --file 99-r3ng-create-indexes.js




