/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sp8li4bgaline32")

  collection.indexes = [
    "CREATE INDEX `idx_RHSchGw` ON `people` (`document_id`)"
  ]

  // remove
  collection.schema.removeField("0hdnxfdn")

  // remove
  collection.schema.removeField("nwy4hvuk")

  // remove
  collection.schema.removeField("c9lqeavy")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sp8li4bgaline32")

  collection.indexes = [
    "CREATE INDEX `idx_RHSchGw` ON `people` (`document_id`)",
    "CREATE INDEX `idx_OtFUNyW` ON `people` (`institutional_email`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0hdnxfdn",
    "name": "first_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nwy4hvuk",
    "name": "last_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c9lqeavy",
    "name": "institutional_email",
    "type": "email",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": [
        "unicolmayor.edu.co"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
