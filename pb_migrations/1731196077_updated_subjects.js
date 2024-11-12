/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rvoy1a4naz2ps7e")

  collection.indexes = [
    "CREATE INDEX `idx_mbehpMq` ON `subjects` (`subject_code`)",
    "CREATE UNIQUE INDEX `idx_DBISUgP` ON `subjects` (`subject_code`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rvoy1a4naz2ps7e")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_mbehpMq` ON `subjects` (`subject_code`)"
  ]

  return dao.saveCollection(collection)
})
