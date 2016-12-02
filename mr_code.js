conn = new Mongo();
db = conn.getDB("gdp_benefit");

var mapFunction = function() {
                          var key = {
                            country:this.Country,
                            year:this.Time
                          };
                          var value = this.Value;
                          emit(key, value);
                   };

var reduceFunction = function(keySKU, countObjVals) {
                    reducedVal = 0;

                    for (var idx = 0; idx < countObjVals.length; idx++) {
                        reducedVal += countObjVals[idx];
                    }

                    return reducedVal;
                 };

db.edu_final.mapReduce( mapFunction,
                        reduceFunction,
                        {
                            out: { merge: "edu_total" }
                        }
                      )