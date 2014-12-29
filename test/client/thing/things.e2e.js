describe('Things', function() {
  it('should be linked to from the root page, and contain our tagline', function() {
    console.log(browser);
    browser.get('http://localhost:3000');
    element(by.linkText("Things")).click();
    
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/things');
    expect(element(by.binding("thing.tagline")).getText()).toEqual("I'm such a Thing.");
  });
});