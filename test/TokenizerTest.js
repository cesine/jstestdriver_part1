TestCase("TokenizerTest", {
    "test find segmentation segment for English": function() {
        var tokenizer = new ilanguage.Tokenizer();
        assertEquals("", tokenizer.findSegmenter("This isn't much of a corpus to check in."));
    }
});
