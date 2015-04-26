describe('mpd parser present', function(){
  describe('checks if st.mpdParser is available', function(){
    it('should return true if present', function(){
      chai.assert.isFunction(sr.mpdParser);
    });
  });
});