'use strict';

angular.module('knowledgevisionHtml5PlaylistappApp')
	.controller('MainCtrl', function($scope, videoService) {
	// list of test videos
	$scope.videos = [{
		'id': '1',
		'type': 'mp4',
		'title': 'Big Buck Bunny',
		'src': 'assets/big_buck_bunny.mp4',
		'startTime': 14
	}, {
		'id': '2',
		'type': 'mp4',
		'title': 'Goofy Pirates',
		'src': 'assets/pirateSong.mp4',
		'startTime': 53
	}, {
		'id': '3',
		'type': 'remote',
		'title': 'Remote Video',
		'src': 'http://content.bitsontherun.com/videos/q1fx20VZ-52qL9xLP.mp4',
		'startTime': 205
	}];
	$scope.selectedVideo = {
		'id': '1',
		'type': 'mp4',
		'title': 'Big Buck Bunny',
		'src': 'assets/big_buck_bunny.mp4',
		'startTime': 0
	};
	$scope.playbackTime = 0;
	// listen for service broadcast of click
	$scope.$on('handleVideoClick', function() {
		console.log('Set Video: ', videoService.getVideo().src);
		$scope.selectedVideo = videoService.getVideo();
	});
	// listen for video playback time
	$scope.$on('timeUpdated', function() {
		$scope.playbackTime = videoService.getPlaybackTime();
	});
});