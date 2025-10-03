// ============================================
// MongoDB CHECKPOINT - CRUD OPERATIONS
// ============================================

// 1. CREATE DATABASE AND SWITCH TO IT
use contact

// 2. CREATE COLLECTION (implicitly created with first insert)
// Collection name: contactlist

// 3. INSERT DOCUMENTS
db.contactlist.insertMany([
  {
    lastName: "Ben",
    firstName: "Moris",
    email: "ben@gmail.com",
    age: 26
  },
  {
    lastName: "Kefi",
    firstName: "Seif",
    email: "kefi@gmail.com",
    age: 15
  },
  {
    lastName: "Emilie",
    firstName: "brouge",
    email: "emilie.b@gmail.com",
    age: 40
  },
  {
    lastName: "Alex",
    firstName: "brown",
    age: 4
  },
  {
    lastName: "Denzel",
    firstName: "Washington",
    age: 3
  }
])

// ============================================
// QUERY OPERATIONS
// ============================================

// 4. DISPLAY ALL CONTACTS
db.contactlist.find().pretty()

// 5. DISPLAY ONE CONTACT BY ID
// Replace <ID> with an actual ObjectId from your database
// Example: db.contactlist.findOne({_id: ObjectId("507f1f77bcf86cd799439011")})
db.contactlist.findOne({_id: ObjectId("<PASTE_AN_ID_HERE>")})

// Alternative: Find by name
db.contactlist.findOne({lastName: "Ben"})

// 6. DISPLAY ALL CONTACTS WITH AGE > 18
db.contactlist.find({age: {$gt: 18}}).pretty()

// 7. DISPLAY CONTACTS WITH AGE > 18 AND NAME CONTAINING "ah"
db.contactlist.find({
  age: {$gt: 18},
  $or: [
    {firstName: {$regex: "ah", $options: "i"}},
    {lastName: {$regex: "ah", $options: "i"}}
  ]
}).pretty()

// ============================================
// UPDATE OPERATIONS
// ============================================

// 8. CHANGE FIRST NAME FROM "Kefi Seif" TO "Kefi Anis"
db.contactlist.updateOne(
  {lastName: "Kefi", firstName: "Seif"},
  {$set: {firstName: "Anis"}}
)

// Verify the update
db.contactlist.find({lastName: "Kefi"}).pretty()

// ============================================
// DELETE OPERATIONS
// ============================================

// 9. DELETE CONTACTS WITH AGE < 5
db.contactlist.deleteMany({age: {$lt: 5}})

// ============================================
// FINAL DISPLAY
// ============================================

// 10. DISPLAY ALL CONTACTS AFTER DELETIONS
db.contactlist.find().pretty()

// ============================================
// ADDITIONAL USEFUL COMMANDS
// ============================================

// Count documents
db.contactlist.countDocuments()

// Show all databases
show dbs

// Show all collections in current database
show collections

// Drop collection (if you need to start over)
// db.contactlist.drop()

// Drop database (if you need to start over)
// db.dropDatabase()