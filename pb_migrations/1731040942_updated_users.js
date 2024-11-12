/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.indexes = [
    "CREATE INDEX `idx_OxgGTKE` ON `users` (`document_id`)",
    "CREATE INDEX `idx_rVwognH` ON `users` (`institutional_email`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sbploeiz",
    "name": "institutional_email",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.indexes = [
    "CREATE INDEX `idx_OxgGTKE` ON `users` (`document_id`)",
    "CREATE INDEX `idx_rVwognH` ON `users` (`nstitutional_email`)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sbploeiz",
    "name": "nstitutional_email",
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

  return dao.saveCollection(collection)
})
