# thoughts.io

social media simulator · cyberbullying detection · moderation pipelines

![node](https://img.shields.io/badge/node.js-v18+-000?style=flat-square&labelColor=000&color=333)
![stack](https://img.shields.io/badge/stack-react_+_express_+_mongodb-000?style=flat-square&labelColor=000&color=333)
![ml](https://img.shields.io/badge/ml-fastapi_inference-000?style=flat-square&labelColor=000&color=333)

---

a threaded discussion platform focused on backend architecture, real-time moderation pipelines, and admin review workflows. users create posts and replies — every reply passes through a machine learning inference step before it's stored.

the primary focus is **not** engagement-driven social features. it's the moderation pipeline.

---

## tech stack

| layer | tools |
|---|---|
| frontend | react, vite, tailwind css |
| backend | node.js, express.js, mongoose, axios |
| database | mongodb atlas |
| ml inference | fastapi (external) |

---

## architecture

| service | port |
|---|---|
| frontend | 5173 |
| backend api | 5000 |
| ml inference | 8000 |
| database | mongodb atlas |

---

## moderation pipeline

```
user submits reply
       ↓
backend → POST http://127.0.0.1:8000/predict
       ↓
ml returns { label, confidence }
       ↓
backend stores label + confidence + moderation_status
       ↓
cyberbullying? → flagged for admin review
       ↓
admin allows or hides
       ↓
only visible replies shown in threads
```

---

## classification labels

the ml api is expected to return one of:

```
not_cyberbullying   gender   religion   ethnicity   age   other_cyberbullying
```

---

## ml server contract

> this repo does **not** include the ml model or fastapi server.
> the backend expects it running at `http://127.0.0.1:8000/predict`.
> without it, reply creation will fail.

**request**

```json
{ "text": "reply content" }
```

**response**

```json
{ "label": "not_cyberbullying", "confidence": 0.98 }
```

compatible with your own fastapi server, a mock api, or any moderation service matching this contract.

---

## prerequisites

- node.js v18+
- npm
- mongodb atlas cluster

---

## environment setup

create `server/.env`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## installation

**1 · clone**

```bash
git clone <repo-url>
cd thoughts.io-main
```

**2 · backend**

```bash
cd server
npm install
npm run dev
```

runs on `http://localhost:5000`

**3 · frontend**

```bash
cd client
npm install
npm run dev
```

runs on `http://localhost:5173`

---

## project structure

```
thoughts.io/
├── client/        # react frontend
├── server/        # express backend api
└── README.md
```

---

## features

- create and view discussion posts
- threaded reply system
- real-time moderation pipeline
- cyberbullying classification support
- admin moderation dashboard — allow or hide flagged replies
- mongodb atlas cloud database integration

---

## future improvements

- authentication & jwt authorization
- real ml model integration
- role-based moderation
- nested threaded replies
- toxicity analytics dashboard
- websocket live updates
- docker deployment support
