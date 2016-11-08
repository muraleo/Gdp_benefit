conn = new Mongo();
db = conn.getDB("gdp_benefit");

db.education.find(
	{'Indicator':"Enrolment in pre-primary education, both sexes (number)" ,
	'Value':{$exists:true}}, 
		{Indicator:1, Country:1, Time:1, Value:1}).forEach(
			function(e){db.final_edu.insert(e);}
		);
db.education.find(
	{'Indicator':"Enrolment in primary education, both sexes (number)" ,
	'Value':{$exists:true}}, 
		{Indicator:1, Country:1, Time:1, Value:1}).forEach(
			function(e){db.final_edu.insert(e);}
		);
db.education.find(
	{'Indicator':"Enrolment in secondary general, both sexes (number)" ,
	'Value':{$exists:true}}, 
		{Indicator:1, Country:1, Time:1, Value:1}).forEach(
			function(e){db.final_edu.insert(e);}
		);
db.education.find(
	{'Indicator':"Enrolment in tertiary education, all programmes, both sexes (number)",
	'Value':{$exists:true}}, 
		{Indicator:1, Country:1, Time:1, Value:1}).forEach(
			function(e){db.final_edu.insert(e);}
		);
db.education.find(
        {'Indicator':"Enrolment in early childhood educational development programmes, both sexes (number)",
        'Value':{$exists:true}},
                {Indicator:1, Country:1, Time:1, Value:1}).forEach(
                        function(e){db.final_edu.insert(e);}
                );
      
