class User
{
  constructor(name,age)
  {
    this.name=name;
    this.age=age;
  }
  compareAge(user)
  {
    if(this.age>user.age)
    {
      console.log(`${this.name} is older than  ${user.name}`);
    }
    else if(this.age<user.age)
    {
      console.log(user.name," is older than ",this.name);
    }
  }
}
let user1=new User("pavan",23);
let user2=new User("Shivam",22);
user1.compareAge(user2);

