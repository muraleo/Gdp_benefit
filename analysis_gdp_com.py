from pymongo import MongoClient
client = MongoClient()

db = client.gdp_benefit
countrys = db.comsumption_final.distinct("Country or Area")

l_g = []
l_c = []

for ct in countrys:
    for yr in range(1970, 2016):
        com = db.comsumption_final.find({"Country or Area": ct, "Year": yr})
        gdp = db.gdp_final.find({"Country or Area": ct, "Year": yr})
        if com.count() > 0 and gdp.count() > 0:
            for doc_com in com:
                # print(doc['value'])
                l_c.append(doc_com['Value']/10000.0)
                for doc_gdp in gdp:
                    l_g.append(doc_gdp['Value']/10000.0)
                    if len(l_g) == 3 and len(l_c) == 3:
                        result_com = (l_c[1] / l_c[0]) - (l_c[2] / l_c[1])
                        result_gdp = (l_g[1] / l_g[0]) - (l_g[2] / l_g[1])
                        if result_com < 0:
                            result = result_com/ result_gdp
                        else:
                            result = result_com / abs(result_gdp)
                        l_c = []
                        l_g = []
                        if result<=10 and result>=(-10):
                            db.gdp_com_value.insert({'Country': ct, 'Year': yr, 'bene_value_gc': result})
                        #if result == 0:
                        print(str(result) + " "+str(ct)+" "+str(yr)+" "+str(result_gdp)+" "+str(result_com))
    l_c = []
    l_g = []
