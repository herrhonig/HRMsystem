module.exports = class UserDto {
  constructor(model) {
    this.email = model.email;
    this.first_name = model.first_name;
    this.last_name = model.last_name;
    this.middle_name = model.middle_name;
    this.id = model.id;
    this.isActivated = model.isActivated;
    this.phone = model.phone;
    this.company = model.company;
    this.access = model.access;
  }
};
