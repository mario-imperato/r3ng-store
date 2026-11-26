print(new Date() + " #################### - 06-r3ng-sequences.js")

db["r3ng_system"].insertOne(
          {
              "domain": "card",
              "_bid": "seq-pgm",
              "site": "auth",
              "_et": "sequence",
              "format": "%08d",
              "value": 1
          }
)
