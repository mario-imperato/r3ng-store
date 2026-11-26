print(new Date() + " #################### - 04-r3ng-system-kv.js")

const collectionName = "r3ng_system"


// Root level packages.
db[collectionName].insertOne(
    {
        "scope": "root",
        "_bid": "theme",
        "_et": "kv",
        "category": "admin-app-general",
        "description": "Aspetto UI di amministrazione",
        "inherit": false
        ,"properties": [
            { "key": "theme", "value": "pi", "order": 0, "kind": "string" },
        ],
        "sys_info": {
            "created_at": new Date(),
            "status": "active",
            "modified_at": new Date()
        }
    });

db[collectionName].insertOne(
    {
        "scope": "root",
        "_bid": "apps",
        "_et": "kv",
        "category": "admin-app-general",
        "description": "Apps disponibili",
        "inherit": false
        ,"properties": [
            { "key": "app-home", "sys_name": "r3ng-fe-admin-home", "status": "active",   "name": "Home",  "description": "description of Home", "icon": "home", "value": "/ui-admin/{0}/{1}/{2}/{3}/app-home", "order": 0, "kind": "string" },
            { "key": "app-cms", "sys_name": "r3ng-fe-admin-cms", "status": "active",   "name": "CMS",  "description": "description of CMS", "icon": "topic", "value": "/ui-admin/{0}/{1}/{2}/{3}/app-cms", "order": 0, "kind": "string" }
        ],
        "sys_info": {
            "created_at": new Date(),
            "status": "active",
            "modified_at": new Date()
        }
    });

// Override for CVF
db[collectionName].insertOne(
    {
        "scope": "root/cvf",
        "_bid": "theme",
        "_et": "kv",
        "category": "admin-app-general",
        "description": "Aspetto UI di amministrazione",
        "inherit": false
        ,"properties": [
            { "key": "theme", "value": "pi", "order": 0, "kind": "string" },
        ],
        "sys_info": {
            "created_at": new Date(),
            "status": "active",
            "modified_at": new Date()
        }
    });

