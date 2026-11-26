print(new Date() + " #################### - 03-r3ng-user.js")

const collectionName = "r3ng_user"
db[collectionName].insertOne(
    {
        "nickname" : "root",
        "_et"  : "root-user",
        "password" : "8a3308114f80796bb4b6d407e605752b167c6b75",
        "firstname": "G",
        "lastname" : "Root",
        "roles": [
            {
                "domain": "*"
                ,"site" : "*"
                ,"apps" : "*"
            }
        ],
        "sys_info": {
            "created_at": new Date(),
            "status": "active",
            "modified_at": new Date()
        }
    });

db[collectionName].insertOne(
    {
        "nickname" : "guest",
        "_et"  : "guest-user",
        "sys_info": {
            "created_at": new Date(),
            "status": "active",
            "modified_at": new Date()
        }
    });

