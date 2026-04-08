# Setting Up Sanity CMS

## One-time setup (15 minutes)

### Step 1 — Create your Sanity project

1. Go to sanity.io and create a free account
2. Click "Create new project"
3. Name it "Ancestral Closet"
4. Choose "Production" as your dataset name
5. Copy your **Project ID** from the project dashboard

### Step 2 — Add environment variables to Vercel

Go to vercel.com → your project → Settings → Environment Variables and add:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | your Project ID from Step 1 |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |

### Step 3 — Allow your domain in Sanity

1. Go to sanity.io → your project → API → CORS Origins
2. Add your live domain: `https://ancestralcloset.com`
3. Add your Vercel preview URL: `https://ancestral-closet.vercel.app`
4. Check "Allow credentials"

### Step 4 — Deploy and access your studio

After uploading to GitHub and Vercel deploys, your CMS editor will be live at:
`https://ancestralcloset.com/studio`

Log in with your Sanity account.

## Adding a saree listing

1. Go to ancestralcloset.com/studio
2. Click "Saree Listings" → "Create"
3. Fill in all the fields
4. Upload photos (first photo = cover image)
5. Toggle "Available" to ON
6. Click "Publish"

Your listing appears on the shop page within 60 seconds. That's it!

## Editing or removing a listing

- To edit: open the listing, make changes, click "Publish"
- To hide without deleting: uncheck "Available", click "Publish"
- To delete permanently: open listing → click the "..." menu → Delete
