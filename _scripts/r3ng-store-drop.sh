#!/bin/sh
# export mongoServer=mongodb://localhost:27017/opem
export mongoServer=mongodb+srv://marioimperato:Y7csjKg4l4c1egiA@maidevfundamentalsclust.x5i5iii.mongodb.net/r3ng
# export mongoServer=mongodb+srv://gpa:gpa@mongo.gpagroup.it/opem_mig_wip?tls=false


mongosh $mongoServer --file r3ng-drop.js




