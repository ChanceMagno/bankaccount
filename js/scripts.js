// Back-End
function Account(name, balance) {
  this.name = name;
  this.balance = balance;
};

Account.prototype.deposit = function(amount) {
  this.balance += amount;
};

Account.prototype.withdraw = function(amount) {
  this.balance -= amount;
};

Account.prototype.getBalance = function() {
  return "Your current balance is: " + this.balance;
};

// Front-End
$(function(){
  var account;
  $("form#register").submit(function(){
    event.preventDefault();
    var inputName = $("#name").val();
    var inputAmount = parseInt($("#initial").val());

    account = new Account(inputName, inputAmount);
    $(".output p").text(account.getBalance());
    $("#depositWithdraw").slideDown();
    $("#register").slideUp();
  });
  $("form#depositWithdraw").submit(function(){
    event.preventDefault();
    var deposit = parseInt($("#deposit").val());
    var withdrawl = parseInt($("#withdraw").val());

    if (deposit) {
      account.deposit(deposit);
    };
    if (withdrawl) {
      account.withdraw(withdrawl);
    };
    $(".output p").text(account.getBalance());
  });
});
