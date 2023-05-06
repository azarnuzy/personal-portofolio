# Installation

To use this personal website project, you will need to have Node.js and npm installed on your computer.

1. Clone this repository:

```
git clone https://github.com/azarnuzy/personal-portofolio
```

2. Navigate into the project directory:

```
cd personal-portofolio
```

3. Install the dependencies:

```
npm install
```

# Configuration

1. Create a `.env.local` file in the root of the project with the following environment variables:

```
MY_EMAIL=[your-email]
MY_PASSWORD=[your-email-password]
```

Note: replace `[your-email]` and `[your-email-password]` with your own email and password, respectively. These are used to send messages from the contact form.

# Usage

To run the development server:

```
npm run dev
```

The website should be available at `http://localhost:3000/`

# Customization

## Content

To change the content of the website, navigate to the `utils` folder and update the appropriate files

## Styling

This project uses Tailwind CSS for styling. To customize the styles, you can edit the `tailwind.config.js` file.

## Deployment

This project can be easily deployed to Netlify with Github integration. Follow these steps:

1. Create a new site in Netlify.
2. Connect your Github repository to Netlify.
3. Configure the build settings:

   - Build command: `npm run build`
   - Publish directory: `out`

4. Set the environment variables in Netlify:

   - MY_EMAIL: [your-email]
   - MY_PASSWORD: [your-email-password]

5. Deploy the site.

Note: replace `[your-email]` and `[your-email-password]` with your own email and password, respectively.

# Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```
   git checkout -b my-feature-branch
   ```

3. Make your changes and commit them:

   ```
   git commit -m "Add my feature"
   ```

4. Push to the branch:

   ```
   git push origin my-feature-branch
   ```

5. Open a pull request on GitHub.

# Credits

This project was built with Next.js, TypeScript, and Tailwind CSS.

# License

This project is licensed under the MIT license. See the `LICENSE` file for details.
