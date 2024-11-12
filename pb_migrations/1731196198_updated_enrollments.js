/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("49ln3muw618ld42")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wuk1mhsc",
    "name": "subject_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "rvoy1a4naz2ps7e",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("49ln3muw618ld42")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wuk1mhsc",
    "name": "subject_id",
    "type": "relation",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "collectionId": "rvoy1a4naz2ps7e",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
