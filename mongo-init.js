db = db.getSiblingDB('event-reward-platform-dev');

db.createCollection('sample_collection');

db.sample_collection.insertMany([
  { name: "test", age: 10}
]);