/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rvoy1a4naz2ps7e",
    "created": "2024-11-09 20:46:49.678Z",
    "updated": "2024-11-09 20:46:49.678Z",
    "name": "subjects",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "agsbeb4d",
        "name": "subject_code",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6xqawdof",
        "name": "subject",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "l1l8e9rv",
        "name": "program_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "fgermh3c3eksw89",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_mbehpMq` ON `subjects` (`subject_code`)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rvoy1a4naz2ps7e");

  return dao.deleteCollection(collection);
})
