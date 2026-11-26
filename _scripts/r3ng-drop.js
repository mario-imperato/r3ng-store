print(new Date() + " #################### - r3ng-drop.js")

db["r3ng_system"].drop();
db["r3ng_user"].drop();
db["r3ng_jobs"].drop();
db["r3ng_s3_event"].drop();
db["r3ng_source"].drop();
db["r3ng_session"].drop();
