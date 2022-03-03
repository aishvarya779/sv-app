var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/aishvarya779/sv-app', // Update to point to your repository
    user: {
      name: 'aishvarya779', // update to use your name
      email: 'aishvaryatiwari123@gmail.com' // Update to use your email
    }
  },
  () => {
    console.log('Deploy Complete!');
  }
);
