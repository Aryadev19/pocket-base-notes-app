/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "el6rf3fifky1pm9",
    "created": "2023-09-10 08:53:19.631Z",
    "updated": "2023-09-10 08:53:19.631Z",
    "name": "title",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "is407ej2",
        "name": "field",
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
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("el6rf3fifky1pm9");

  return dao.deleteCollection(collection);
})
