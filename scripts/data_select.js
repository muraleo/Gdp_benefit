conn = new Mongo();
db = conn.getDB("gdp_benefit");

db.comsumption.find(
	{'Country or Area':"United States"}).forEach(
	function(e) {db.comsumption.update({_id:e._id}, 
			{$set:{'Country or Area':"United States of America"}});}
		);

db.comsumption.find(
	{},{'Country or Area':1,'Year':1,'Value':1}).forEach(
	function(e) {db.comsumption_final.insert(e);}
		);

db.gdp.find(
        {'Country or Area':"United States"}).forEach(
        function(e) {db.gdp.update({_id:e._id},
                        {$set:{'Country or Area':"United States of America"}});}
                );

db.gdp.find(
	{},{'Country or Area':1,'Year':1,'Value':1}).forEach(
	function(e) {db.gdp_final.insert(e);}
		);

db.education.find(
	{'Indicator':"Enrolment in pre-primary education, both sexes (number)" ,
	'Value':{$exists:true}}, 
		{Indicator:1, Country:1, Time:1, Value:1}).forEach(
			function(e){db.edu_temp:.insert(e);}
		);
db.education.find(
	{'Indicator':"Enrolment in primary education, both sexes (number)" ,
	'Value':{$exists:true}}, 
		{Indicator:1, Country:1, Time:1, Value:1}).forEach(
			function(e){db.edu_temp.insert(e);}
		);
db.education.find(
	{'Indicator':"Enrolment in secondary general, both sexes (number)" ,
	'Value':{$exists:true}}, 
		{Indicator:1, Country:1, Time:1, Value:1}).forEach(
			function(e){db.edu_temp.insert(e);}
		);
db.education.find(
	{'Indicator':"Enrolment in tertiary education, all programmes, both sexes (number)",
	'Value':{$exists:true}}, 
		{Indicator:1, Country:1, Time:1, Value:1}).forEach(
			function(e){db.edu_temp.insert(e);}
		);
db.education.find(
        {'Indicator':"Enrolment in early childhood educational development programmes, both sexes (number)",
        'Value':{$exists:true}},
                {Indicator:1, Country:1, Time:1, Value:1}).forEach(
                        function(e){db.edu_temp.insert(e);}
                );
      
