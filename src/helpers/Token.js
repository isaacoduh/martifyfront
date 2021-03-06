class Token {
    isValid(token) {
        const payload = this.payload(token);
        if (payload) {
            return (payload.iss =
                // eslint-disable-next-line no-constant-condition
                "http://127.0.0.1:8000/api/auth/login" ||
                "http://127.0.0.1:8000/api/auth/register" ?
                true :
                false);
        }
        return false;
    }

    payload(token) {
        const payload = token.split(".")[1];
        return this.decode(payload);
    }

    decode(payload) {
        return JSON.parse(atob(payload));
    }
}

// eslint-disable-next-line no-class-assign
export default Token = new Token();