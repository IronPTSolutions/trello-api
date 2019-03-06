# API TRELLO

Let's create an API for our project based on "Trello" service.

The API must handle the following resources:

* Column

| HTTP Method |     Path     |        Description        |
| ----------- | ------------ | ------------------------- |
| GET         | /columns     | get JSON array of columns |
| POST        | /columns     | create column             |
| GET         | /columns/:id | get JSON column detail    |
| PUT         | /columns/:id | update column             |
| DELETE      | /columns/:id | delete column             |

Example of the column object:

```
{
  "position": 3,
  "title": "Hola!",
  "createdAt": "2019-03-06T14:45:43.808Z",
  "updatedAt": "2019-03-06T14:45:43.808Z",
  "cards": [],
  "id": "5c7fdd173717da6f60e0e48f"
}
```

* Card

| HTTP Method |    Path    |       Description       |
| ----------- | ---------- | ----------------------- |
| GET         | /cards     | get JSON array of cards |
| POST        | /cards     | create card             |
| GET         | /cards/:id | get JSON card detail    |
| PUT         | /cards/:id | update card             |
| DELETE      | /cards/:id | delete card             |

Example of the card object:

```
{
  "position": 3,
  "description": "description",
  "imageUrl": "http://image.com",
  "label": "Lab",
  "title": "Hola!",
  "column": "5c7fdd173717da6f60e0e48f",
  "createdAt": "2019-03-06T14:56:29.970Z",
  "updatedAt": "2019-03-06T14:56:29.970Z",
  "id": "5c7fdf9d16b55272897b939c"
}
```

Check mongoose `Populate virtuals`: https://mongoosejs.com/docs/populate.html#populate-virtuals
