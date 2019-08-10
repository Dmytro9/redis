/*
 * Redis Datatypes
 *
 * Strings, Lists, Sets, Sorted Sets, Hashes, Bitmaps, Hyperlogs, Geospatial Indexes
 * 
**/


 /*
 * Commands
 *
 * 
**/

set foo 100

INCR foo // 101
DECR foo // 100

EXISTS foo // 1
EXISTS bar // 0

DEL foo

FLUSHALL // delete everything

// Set key value
set server:name someserver
get server:name


// Expiring seconds
set greeting "Hello world"
Expire greeting 50 

SETEX greeting 30 "Hello world!"

// TTL sec remaining to expiration
TTL greeting // 44 ...


PERSIST greeting // stop expiration


// set many keys values
MSET key1 "Hello" key2 "World"


// append to key
APPEND key1 "World" // Hello World

RENAME key1 greeting // rename the key




// ============= Lists =============
LPUSH people "Brad"
LPUSH people "Jen"

LRANGE people 0 -1 // Brad Jen (get all people in list)
LRANGE people 1 // Jen

RPUSH people "Harry" // push into the end of list

LLEN people // length of list

LPOP people // remove from the start
RPOP people // remove from the end


LINSERT people BEFORE "JEN" "TOM" // insert into spec place - before JEN




// ============= Sets =============
// unordered collections of strings

SADD cars "Ford"
SADD cars "Honda"

SISMEMBER cars "Ford" // 1
SISMEMBER cars "BMW" // 0

SMEMBERS cars // Ford Honda

SCARD cars // 2 
 


// ============= ZADD =============
// sorted collections of strings

ZADD users 1 "Brad Smith"
ZADD users 2 "Jhon Doe"

ZRANK users "Jhon Doe" //
ZRANK users 0 -1 // 



// ============= Hash =============
// key value pair within a hash (for node app)

HSET user:brad name "Brad Smith"
HSET user:brad email "brad@gmail.com"

HGET user:brad name // Brad Smith

HGETALL user:brad // 


