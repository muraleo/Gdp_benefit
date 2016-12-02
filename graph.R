mongo = mongoDbConnect("gdp_benefit")
colors = c("red", "yellow", "green", "violet", "orange", "blue", "pink")

gc_ct<-dbGetQuery(mongo,"gc_ct_final","")
#hist(gc_ct[[1]], 
#    freq = TRUE, 
#     col = colors, 
#     main = "Gdp comsumption value of Countries", 
#     xlab = "Gdp_com_value")
barplot(gc_ct[[1]], 
        names.arg = gc_ct[[2]], 
        horiz = FALSE, 
        col = colors, 
        las=2)
abline(h=1, col=5, ity=3)
text(6.5, 5,"Green line means 1 is the standard value", col = 5) 
abline(h=mean(gc_ct[[1]]), col="red")
text(6, 4,"Red line means the mean value", col = "red")
title("Gdp comsumption benefit value of Countries")

gc_yr0<-dbGetQuery(mongo,"gc_yr_final","")
attach(gc_yr0)
gc_yr<-gc_yr0[order(X_id),]
barplot(gc_yr[[1]], 
        names.arg = gc_yr[[2]], 
        horiz = FALSE, 
        col = colors, 
        las=2)
abline(h=1, col=5, ity=3)
text(20, 7,"Green line means 1, is the standard value", col = 5) 
abline(h=mean(gc_yr[[1]]), col="red")
text(18.7, 6,"Red line means the mean value", col = "red")
title("Gdp comsumption benefit value of Years")

ge_ct<-dbGetQuery(mongo,"ge_ct_final","")
hist(ge_ct[[1]], 
     freq = FALSE, 
     col = colors, 
     main = "Gdp education value of Countries", 
     xlab = "Gdp education benefit value")
rug(ge_ct[[1]])
text(-3.5,0.7,"Mean value is:")
text(-1.9,0.7, mean(ge_ct[[1]]))

ge_yr0<-dbGetQuery(mongo,"ge_yr_final","")
attach(ge_yr0)
ge_yr<-ge_yr0[order(X_id),]
barplot(ge_yr[[1]], 
        names.arg = ge_yr[[2]], 
        horiz = FALSE, 
        col = colors, 
        las=2)
abline(h=1, col=5, ity=3)
text(20, 7,"Green line means 1, is the standard value", col = 5) 
abline(h=mean(ge_yr[[1]]), col="red")
text(3, 0.6,"Red line means the mean value:", col = "red")
text(8.3, 0.6,mean(ge_yr[[1]]), col = "red")
title("Gdp comsumption benefit value of Years")
