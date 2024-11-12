/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fgermh3c3eksw89",
    "created": "2024-11-09 20:43:41.421Z",
    "updated": "2024-11-09 20:43:41.421Z",
    "name": "programs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "x6mj7btc",
        "name": "name_program",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_ul7xr5b` ON `programs` (`name_program`)"
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
  const collection = dao.findCollectionByNameOrId("fgermh3c3eksw89");

  return dao.deleteCollection(collection);
})
