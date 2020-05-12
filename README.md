# Helping Help Foundation - Website
This is the primary repository for HelpingHelp.Foundation website.

Built on [Gatsby](https://www.gatsbyjs.org/) using [StoryHub](https://redq.io/storyhub) tempate.

## Development
- First time, run `$ npm install`
- Run `$ gatsby develop` then
- Visit `http:\\localhost:8000`

## Production
1. Update `package.json`

   ```
   "scripts": {
      ...
      "deploy": "gatsby build && gh-pages -d public -b gh-pages"
   }
   ```

2. Install `gh-pages` plugin using `$ npm install gh-pages`

3. Run npm command `$ npm run deploy`

4. Build and deploys code to `gh-pages` Github branch.

### Github Setup
Option 1: Add `CNAME` record to `gh-pages` branch

or

Option 2: And can also manage this on Github > Repository > Custom Domains

### Domain DNS Records
Add the below IP's as `A` record.
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```