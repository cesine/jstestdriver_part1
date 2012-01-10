TestCase("GreeterTest", {
    "test greet": function() {
        var greeter = new myapp.Greeter();
        assertEquals("Hello World!", greeter.greet("World"));
    }
});
