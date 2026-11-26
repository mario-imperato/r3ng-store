print(new Date() + " #################### - 02-r3ng-site.js")

const collectionName = "r3ng_system"

db[collectionName].insertOne(
    {
        "_bid" : "cvfonline",
        "_et": "site",
        "domain": "cvf",
        "name" : "CVF Online",
        "description" : "Circolo Velico Fiumicino",
        "langs": "it",
        "apps": [
            {
                "id": "app-home"
                ,"obj_type": "app-admin"
                ,"name": "r3ng-fe-admin-home"
                ,"description": "Applicazione Home"
                ,"version": "latest"
            }
        ],
        "sys_info": {
            "created_at": new Date(),
            "status": "active",
            "modified_at": new Date()
        }
    })

db[collectionName].insertOne(
    {
        "_bid" : "cvfchamp46",
        "_et": "site",
        "domain": "cvf",
        "name" : "Camp. Invernale 46",
        "description" : "Campionato Invernale 2026/27",
        "langs": "it",
        "apps": [
            {
                "id": "app-home"
                ,"obj_type": "app-admin"
                ,"name": "r3ng-fe-admin-home"
                ,"description": "Applicazione Home"
                ,"version": "latest"
            },
            {
                "id": "app-cms"
                ,"obj_type": "app-admin"
                ,"name": "r3ng-fe-admin-cms"
                ,"description": "Applicazione CMS"
                ,"version": "latest"
            }
        ],
        "sys_info": {
            "created_at": new Date(),
            "status": "active",
            "modified_at": new Date()
        }
    })

