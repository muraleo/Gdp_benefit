conn = new Mongo();
db = conn.getDB("gdp_benefit");

db.gdp_edu_value.aggregate(
   [
      {
        $group : {
           _id :"$Year",
           averageValue: { $avg: "$bene_value" }
        }
      },
      {$out:"ge_yr_final"}
   ]
)

db.gdp_edu_value.aggregate(
   [
      {
        $group : {
           _id : "$Country",
           averageValue: { $avg: "$bene_value" }
        }
      },
      {$out:"ge_ct_final"}
   ]
)

db.gdp_com_value.aggregate(
   [
      {
        $group : {
           _id : "$Year",
           averageValue: { $avg: "$bene_value_gc" }
        }
      },
      {$out:"gc_yr_final"}
   ]
)

db.gdp_com_value.aggregate(
   [
      {
        $group : {
           _id :"$Country",
           averageValue: { $avg: "$bene_value_gc" }
        }
      },
      {$out:"gc_ct_final"}
   ]
)
