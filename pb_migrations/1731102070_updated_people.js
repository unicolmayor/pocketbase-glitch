/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sp8li4bgaline32")

  // remove
  collection.schema.removeField("zfc2vipe")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sp8li4bgaline32")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zfc2vipe",
    "name": "role",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "DOCENTE",
        "ESTUDIANTE"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
