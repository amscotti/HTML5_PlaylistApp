'use strict';

angular.module('knowledgevisionHtml5PlaylistappApp')
	.directive('kvPlayer', function(videoService) {
	return {
		restrict: 'A',
		link: function postLink(scope, element) {
			var pop;
			scope.$watch("selectedVideo", function() {
            	element.children().remove();
            	pop = Popcorn.smart( element[0].id, scope.selectedVideo.src);
            	window.pop = pop;

            	pop.play();
				videoService.setVideoElement(pop);
				pop.on("timeupdate", function() {
					videoService.trackPlayback(pop.currentTime());
				});

				pop.on("ended", function() {
					pop.off("timeupdate");
				});

				pop.on("play", function() {
					pop.off("popcorn play!");
				});

            });   			
		}
	};
});