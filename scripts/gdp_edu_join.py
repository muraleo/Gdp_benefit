from pymongo import MongoClient
client = MongoClient()

db = client.gdp_benefit
countrys = db.edu_final.distinct('Country')
l_e = []
l_g = []
l_c = []

for ct in countrys:
    for yr in range(1990,2016):
        edu = db.edu_total.find({"_id.country":ct, "_id.year":yr})
        gdp = db.gdp_final.find({"Country or Area":ct, "Year":yr})
        if edu.count()>0 and gdp.count()>0:
            for doc_edu in edu:
                #print(doc['value'])
                l_e.append(doc_edu['value']/1.0)
                for doc_gdp in gdp:
                    l_g.append(doc_gdp['Value']/1.0)
                    if len(l_g)==3 and len(l_e)==3:
                        result_edu = (l_e[1] * l_e[1] - l_e[2] * l_e[0]) / (l_e[0] * l_e[1])
                        result_gdp = (l_g[1] * l_g[1] - l_g[2] * l_g[0]) / (l_g[0] * l_g[1])
                        if result_edu < 0:
                            result = result_edu/ result_gdp
                        else:
                            result = result_edu / abs(result_gdp)

                        l_e = []
                        l_g = []
                        if result <= 10 and result >= (-10):
                            db.gdp_edu_value.insert({'Country':ct,'Year':yr,'bene_value':result})
                            print(result)
    l_e = []
    l_g = []
