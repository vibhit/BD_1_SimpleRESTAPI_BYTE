# Product REST API - AVIP 2026 Task 1

**Project:** Simple REST API with Full CRUD Operations  
**Built by:** Vibhit | AVIP 2026 @ B.Y.T.E by Arithmatrix  
**Stack:** Node.js + Express + SQLite  
**Status:** 🚀 Ready for Deployment

---

## 🚀 Quick Start

### Installation
```bash
git clone https://github.com/vibhit/BD_1_SimpleRESTAPI_BYTE.git
cd BD_1_SimpleRESTAPI_BYTE
npm install
node app.js
```

> **Note:** This is for local development. For the live deployed API, see "Live Deployment" section below.
Server runs on: **http://localhost:3000**

---

## 🌐 Live Deployment

**API is live at:** https://bd-1-simplerestapi-byte-1see.onrender.com

All endpoints above work with the live URL too! Test with Postman.

## 📡 API Endpoints

### ✅ GET /products
**Fetch all products**

```bash
curl http://localhost:3000/products
```

Response (200):
```json
[
  { "id": 1, "name": "iPhone", "price": 80000 },
  { "id": 2, "name": "Oppo", "price": 10000 },
  { "id": 5, "name": "Laptop", "price": 70000 },
  { "id": 6, "name": "Vivo", "price": 90000 }
]
```

---

### ✅ POST /products
**Create new product**

```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Tablet","price":15000}'
```

Response (201 Created):
```json
{
  "message": "product created successfully",
  "id": 7
}
```

**Validation:**
- `name` (string, required, not empty)
- `price` (number, required, cannot be negative)

---

### ✅ GET /products/:id
**Fetch single product**

```bash
curl http://localhost:3000/products/1
```

Response (200):
```json
{ "id": 1, "name": "iPhone", "price": 80000 }
```

Error (404):
```json
{ "message": "product Not Found" }
```

---

### ✅ PUT /products/:id
**Update product**

```bash
curl -X PUT http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"iPhone 15","price":90000}'
```

Response (200):
```json
{ "message": "product updated successfully" }
```

---

### ✅ DELETE /products/:id
**Delete product**

```bash
curl -X DELETE http://localhost:3000/products/1
```

Response (200):
```json
{ "message": "product deleted successfully" }
```

Error (404):
```json
{ "message": "product not found" }
```

---

## ✨ Features Implemented

✅ Full CRUD Operations (Create, Read, Update, Delete)  
✅ Input Validation (name, price)  
✅ HTTP Status Codes (201, 400, 404, 200)  
✅ SQLite Database (persistent storage)  
✅ JSON Responses  
✅ Error Handling  
✅ Database Auto-initialization  

---

## 🧪 Testing

**Tested with:** Postman ✅  
**All Endpoints:** Working ✅  

---

## 📂 Project Structure
