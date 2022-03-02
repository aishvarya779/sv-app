import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'Mr. Aishvarya Tiwari',
    src:
      'https://as2.ftcdn.net/v2/jpg/04/67/56/35/1000_F_467563548_yhMye5JjVlzTmtmFou6VTDICBe7p2sNU.jpg'
  }
});

export default app;
