goog.provide('sr.mpdParser');

goog.require('shaka.dash.MpdRequest');
goog.require('shaka.dash.mpd');
goog.require('shaka.dash.MpdProcessor');
goog.require('shaka.util.PublicPromise');

sr.mpdParser = function(mpdUrl) {
	var mpdRequest = new shaka.dash.MpdRequest(mpdUrl);
	var promise = new shaka.util.PublicPromise();

	mpdRequest.send().then(/** @param {!shaka.dash.mpd.Mpd} mpd */
		function(mpd) {
		    var mpdProcessor = new shaka.dash.MpdProcessor(null);
		    mpdProcessor.process(mpd);
		    promise.resolve(mpdProcessor);
	  	}
  	);

  	return promise;
};

// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('sr.mpdParser', sr.mpdParser);