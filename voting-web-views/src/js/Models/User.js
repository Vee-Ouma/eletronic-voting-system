class User {
    constructor () {
        this.name = '';
        this.city = '';
        this.email = '';
        this.isLoggedIn = false;
    }

    isLoggedIn () {
        return this.isLoggedIn;
    }

    toggleLoggedIn () {
        this.isLoggedIn = !this.isLoggedIn;
    }

    getName () {
        return this.name;
    }

    getToken () {
        const token = sessionStorage.getItem('token');
        return token;
    }

    getCity () {
        return this.city;
    }

    getEmail () {
        return this.email;
    }

    setName (name) {
        this.name = name;
        return this;
    }

    setToken (token) {
        sessionStorage.setItem('token', token);
        return this;
    }

    setEmail (email) {
        this.email = email;
        return this;
    }
}

const user = new User();
export default user;
