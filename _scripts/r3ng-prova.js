print(new Date() + " #################### - r3ng-prova.js")

const collectionName = "r3ng_prova"
db[collectionName].deleteMany({});

for (let j = 0; j < 200; j++) {
    let batch = []
    for (let i = 0; i < 1000; i++) {
        batch.push(
            {
                insertOne: {
                    "data": "      *> ================================================================*",
                    "type": "Comment",
                    "lineNumber": 2
                }
            }
        )
    }

    let resp = db[collectionName].bulkWrite(batch);
    print(resp);
}




