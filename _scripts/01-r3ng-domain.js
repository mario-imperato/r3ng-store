print(new Date() + " #################### - 01-r3ng-domain.js")

const collectionName = "r3ng_system"

db[collectionName].insertOne(
    {
        "_bid" : "root",
        "_et": "domain",
        "name" : "Master Domain",
        "description" : "the master of domains",
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
        "members": [
            {
               "code": "card", "obj_type": "domain"
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
        "_bid" : "cvf",
        "_et": "domain",
        "name" : "CVF",
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
        "members": [
            {
                "code": "edenred", "obj_type": "site"
            }
        ],
        "sys_info": {
            "created_at": new Date(),
            "status": "active",
            "modified_at": new Date()
        }
    })

