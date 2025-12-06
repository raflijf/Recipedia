const validate = {
    email(value) {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(value);
  },
}

export default validate