function BankAccount(firstName,lastName,balance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
}

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
}

BankAccount.prototype.withdrawal = function(amount) {
  this.balance -= amount;
}

$(function() {
  
});
