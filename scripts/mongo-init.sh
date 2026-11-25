#!/bin/sh
# cd r3ds9-apigtw
# ./apigtw-mongo-init.sh

# export mongoServer=mongodb://localhost:27017/opem
export mongoServer=mongodb+srv://marioimperato:Y7csjKg4l4c1egiA@maidevfundamentalsclust.x5i5iii.mongodb.net/opem

cd store-system
./store-system-init.sh $mongoServer

cd ../store-cms
./store-cms-init.sh $mongoServer
