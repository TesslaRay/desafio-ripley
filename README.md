# Desafío Ripley - Backend



<p align="center">The <i>API</i> is <a href='https://api-desafio-ripley-dot-cristian-valdivia.ue.r.appspot.com'>HERE</a></br>This API will be running until <b>December 31, 2021 12:00 PM GMT-3</b><br /></p>

<hr>

API that manage catalog. It´s a simple cloud with Firestore. Use **express**, **axios** and **material ui**


## API

___

`GET /product/:id`

Get Product by id from Firestore

### Query params

| Name | Type   |
| ---- | ------ |
| id   | number |


### Response with status 200

| Name        | Type   |
| ----------- | ------ |
| description | string |
| price       | number |
| name        | string |
| id          | number |
| image       | string |
| branding    | string |


### Response Example 
```JSON
{
  "description": "Audifonos In Ear Sony con conexión Bluetooth y NFC control de volumen y batería que dura hasta 6 horas de reproducción continua de música o 4 horas en llamadas.",
  "price": 139990,
  "name": "AUDIFONOS SONY BLUETOOTH WF-1000XM3 NEGRO",
  "id": 1,
  "image": "https://home.ripley.cl/store/Attachment/WOP/D347/2000376659756/2000376659756_2.jpg",
  "branding": "sony"
}
```
___
`GET /products`

Get all the Products in Firestore


### Response with status 200

### Response Example 
```JSON
[
  {
    "id": 63,
    "image": "https://home.ripley.cl/store/Attachment/WOP/D317/2000379794089/2000379794089_2.jpg",
    "price": 39990,
    "brand": "samsung",
    "description": "wena bici",
    "name": "ZAPATILLA ADIDAS SUPERNOVA"
  },
  {
    "id": 640,
    "brand": "samsung",
    "description": "Todo el mundo corre por diferentes motivos. Sea cual sea tu motivación, estas zapatillas adidas te ayudan a lograr tus objetivos. Presentan una combinación de acolchado flexible en el antepié y amortiguación receptiva en el talón que brinda suavidad y máxima comodidad. Además, como nos tomamos en serio la protección del medioambiente, estas zapatillas están hechas con materiales reciclados.",
    "price": 39990,
    "image": "https://home.ripley.cl/store/Attachment/WOP/D317/2000379794089/2000379794089_2.jpg",
    "name": "ZAPATILLA ADIDAS SUPERNOVA"
  }
]
```
___
`PUT /product`

Update Product in Firestore


### Body example
```JSON
{
	
 		"product": {
			"brand": "sony",	
	 		"image": "https://home.ripley.cl/store/Attachment/WOP/D347/2000381258203/2000381258203-1.jpg",
 			"name": "AUDIFONOS SONY WH-1000XM4 NEGRO",
 			"description": "Potencia tus instancias musicales con los geniales audífonos Over Ear Sony WH-1000XM4 para una conectividad de alta gama a cada momento. ¡Consigue los tuyos en Ripley.com!",
			"price": 31990
		}
	
}
```
### Response with status 200

### Response Example 
```JSON
{
  "updateProduct": {
    "price": 31990
  }
}
```
___

`POST /product`

Create Product in Firestore

### Body example
```JSON
{
	"product": {
		"brand": "racecar",	
 		"image": "https://home.ripley.cl/store/Attachment/WOP/D317/2000379794089/2000379794089_2.jpg",
 		"name": "card",
 		"description": "wena bici",
		"price": 39990
	}
}
```
### Response with status 200

### Response Example 
```JSON
{
  "brand": "racecar",
  "image": "https://home.ripley.cl/store/Attachment/WOP/D317/2000379794089/2000379794089_2.jpg",
  "name": "card",
  "description": "wena bici",
  "price": 39990,
  "id": 229
}
```
___

`DELETE /product/:id`

Delete Product by id from Firestore

### Query params

| Name | Type   |
| ---- | ------ |
| id   | number |


### Response with status 200
### Response Example 
```JSON
{
  "deleteProduct": "229"
}
```

Develop Commands
========

`npm start`: run in development mode.

