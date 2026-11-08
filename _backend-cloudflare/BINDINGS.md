# EXJ Root Tracker App — Cloudflare Pages bindings

SHARMATRACK builder edition for **EXJ Root LLC** (residential houses).
Deploy-ready copy for Cloudflare Pages in **advanced mode**: the single
`_worker.js` at the site root routes the three API paths and delegates
everything else to `env.ASSETS`. Storage is **one KV namespace** (not R2 —
R2 requires a payment method on file; KV free tier does not).

| Route | Methods |
|---|---|
| `/api/photos` | GET (list `?job=`), POST (upload), DELETE (`?key=`) |
| `/api/photos/file` | GET (`?key=`) |
| `/api/jobmeta` | GET (`?job=`), POST |

## Binding (ONE total)

1. Dashboard → Workers & Pages → KV → Create namespace → name it
   `exj-root-photos` (separate from the Z Brothers `sharma-crew-photos`).
2. Pages project `exj-root-tracker` → Settings → Functions → KV namespace
   bindings → Add binding: variable name `PHOTOS` → namespace
   `exj-root-photos`.
3. Redeploy the project so the worker picks up the binding.

## Seeding houses

Houses are static, one folder per house id. Add each house Sanjay sends with:

```
python3 tools/add_house.py --address "123 Main St" --city "Orlando, FL" [--plan X] [--phase Y]
```

then redeploy `site/`. Uploads require **no name** (name is an optional
tag). No prices anywhere in the app.
