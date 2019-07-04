const PageState = function() {
    let currentState = new homeState(this);

    this.init = function() {
        this.change(new homeState);
    }

    this.change = function(state) {
        currentState = state;
    }
};

// Home State

const homeState = function(page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
    <div class="hero-unit">
    <h1>Welcome to the GSO Dashboard</h1>
    <p>Confess your failures - we'll sort it out for you</p>
    <p>
      <a class="btn btn-primary btn-large">
        Get started
      </a>
    </p>
  </div>`;
};

// About State

const aboutState = function(page){
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `
        <p>About Us:</p><br>
        <p>Team Members:</p>
    `;
};

// Contact State

const contactState = function(page){
    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#content').innerHTML = `
        <form>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
            <label>Email address</label>
            <input type="email" class="form-control">
            <div class="form-group">
            <label>Message</label>
            <input type="text" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
    `;
};


// instantiate pageState

const page = new PageState();

// Init the first state
page.init();

// UI Vars

const home = document.getElementById('home'),
      about = document.getElementById('about'),    
      contact = document.getElementById('contact');


// Home

home.addEventListener('click', (e) => {
    page.change(new homeState);
    e.preventDefault();
});

// About

about.addEventListener('click', (e) => {
    page.change(new aboutState);
    e.preventDefault();
});
// contact

contact.addEventListener('click', (e) => {
    page.change(new contactState);
    e.preventDefault();
});