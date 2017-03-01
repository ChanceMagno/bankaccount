
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
  return "$" + this.balance;
};

// Front-End
$(function(){
  var account;
  $("form#register").submit(function(){
    event.preventDefault();
    var inputName = $("#name").val();
    var inputAmount = parseInt($("#initial").val());

    if (inputName && inputAmount) {
      $("#error").hide();
      account = new Account(inputName, inputAmount);
      $(".output").text(account.getBalance());
      $("#depositWithdraw").slideDown();
      $("#register").slideUp();
    } else {
      $("#error").show();
    };
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
    if (account.balance < 0) {
      alert("Sorry, you have overdrawn, you owe " + Math.abs(account.balance) + " Dollar(s)");
    } else {
    $(".output").text(account.getBalance());
    }
  });
});
