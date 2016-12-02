from pymongo import MongoClient
client = MongoClient()

db = client.gdp_benefit
countrys = db.edu_temp.distinct("Country")
for country in countrys:
    for num in range(1990,2016):
        e = db.edu_temp.find({'Country':country, 'Time':num, 'Value':{'$gte': 1}},{'Indicator':1, 'Country':1, 'Time':1, 'Value':1})
        for document in e:
            if(e.count()==3):
                #print(document)
                db.edu_final.insert(document)