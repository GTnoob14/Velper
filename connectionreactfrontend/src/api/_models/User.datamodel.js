class UserModel{

    constructor(public_id, firstname, lastname, password, email, age, country, state, city, gender, biography, interests, friendIdList){
        this.public_id = public_id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.email = email;
        this.age = age;
        this.country = country;
        this.state = state;
        this.city = city;
        this.gender = gender;
        this.biography = biography;
        this.interests = interests;
        this.friendIdList = friendIdList;
    }
}

export default UserModel;