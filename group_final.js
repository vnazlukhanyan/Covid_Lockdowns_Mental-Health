use msds697_db

db.covid.getShardDistribution()

db.google.getShardDistribution()

db.lockdown.getShardDistribution()

db.covid.find().count()

db.covid.aggregate(
    {$group : { _id : "$age_group"}},
    {$count : "age_group"}
) 

db.covid.aggregate(
    {$group : { _id : "$age_group", count : {$sum : 1}}}
)


db.lockdown.createIndex({"_id": "hashed"})

sh.enableSharding('msds697_db')

sh.shardCollection("msds697_db.lockdown", {"_id": "hashed"})

db.lockdown.getShardDistribution()


db.adminCommand( { removeShard : "atlas-anx8sc-shard-1"})

sh.getBalancerState()

sh.isBalancerRunning()

use config

sh.startBalancer()


db.settings.update(
   { _id: "balancer" },
   { $set: { activeWindow : { start : 15, stop : 18 } } },
   { upsert: true }
)


