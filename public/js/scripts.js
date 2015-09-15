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

var resetInputs = function() {
  $("input").val("");
}

$(function() {
  $("form.create-account").submit(function(event) {
    event.preventDefault();

    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var balance = $("#initial-balance").val();
    balance = parseInt(balance);

    var account = new BankAccount(firstName,lastName,balance);

    $(this).hide();
    $(this).prev("h2").text("My Account");
    $(".main-content").append("<h1>Current Balance: <span id='balance-header'>"  + account.balance + "</span></h1>" +
                              "<form id='withdraw-form'>" +
                                "<span class='show-withdraw btn btn-warning'>Withdraw</span> <span class='btn btn-success show-deposit'>Deposit</span>" +
                                '<div class="form-group withdraw">' +
                                  '<label for="withdraw">Withdraw Amount</label>' +
                                  '<input class="form-control" type="text" name="withdraw" id="withdraw">' +
                                  '<button type="submit" class="btn btn-info">Withdraw</button>' +
                                '</div>' +
                              "</form>" +
                              "<form id='deposit-form'>" +
                                '<div class="form-group deposit">' +
                                  '<label for="deposit">Deposit Amount</label>' +
                                  '<input class="form-control" type="text" name="deposit" id="deposit">' +
                                  '<button type="submit" class="btn btn-info">Deposit</button>' +
                                '</div>' +
                              "</form>");

    $("span.show-withdraw").click(function(){
      $(this).hide();
      $('.withdraw').show();
    });

    $("span.show-deposit").click(function(){
      $(this).hide();
      $('.deposit').show();
    });

    $("form#withdraw-form").submit(function(event) {
      event.preventDefault();
      var amount = $("input#withdraw").val();
      amount = parseInt(amount);
      account.withdrawal(amount);
      $("span#balance-header").text(account.balance)
      resetInputs();
    });

    $("form#deposit-form").submit(function(event) {
      event.preventDefault();
      var amount = $("input#deposit").val();
      amount = parseInt(amount);
      account.deposit(amount);
      $("span#balance-header").text(account.balance)
      resetInputs();
    });
});




});
