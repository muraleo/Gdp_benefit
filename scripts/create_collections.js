conn = new Mongo();
db = conn.getDB("gdp_benefit");

db.createCollection('education')
db.createCollection('comsumption')
db.createCollection('gdp')
