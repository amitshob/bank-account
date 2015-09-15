describe('BankAccount', function() {
  it('returns the current account balance ', function() {
    var account = new BankAccount("John","Doe",1000);
    expect(account.balance).to.eql(1000);
    expect(account.firstName).to.eql("John");
    expect(account.lastName).to.eql("Doe");
  });
});
