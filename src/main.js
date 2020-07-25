class App {
  constructor(){
    this.repositories = [];

    this.formEl = document.getElementById('repo-form');

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  addRepository(event) {
    event.preventDefault(); // Para nao redirecionar à outra página quando clicar no BOTÃO submit
    
    this.repositories.push({
      name: 'Neylanio',
      description: 'Profile Github',
      avatar_url: 'https://avatars1.githubusercontent.com/u/15330671?v=4',
      html_url: 'http://github.com/Neylanio',
    });

    console.log(this.repositories);
  }
}

new App();