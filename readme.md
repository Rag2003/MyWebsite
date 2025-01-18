## Running Locally

Clone the repo and run:

    git clone https://github.com/Rag2003/MyWebsite.git
    npm install
    npm run dev

If on Windows, use `npm install --no-optional` to skip `fsevents`.

## Build and Deploy

To build for production:

    npm install
    npm run build
    npm start

If port 80 is in use, use a different port:

    PORT=3000 npm start

## Cloud Deployment (Vercel)

Install Vercel CLI:

    sudo npm i -g --unsafe-perm vercel

To deploy:

    npm install -g vercel
    vercel

For production:

    vercel -E production.env

## After Deployment

Use the URL provided by Vercel to preview. For aliases:

    vercel alias
