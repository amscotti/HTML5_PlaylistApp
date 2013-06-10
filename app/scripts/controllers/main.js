'use strict';

angular.module('knowledgevisionHtml5PlaylistappApp')
	.controller('MainCtrl', function($scope, $http, videoService) {

	  	//$scope.templateUrl = "views/main.html";
	  	$http.get("config.json").then(function(response){
	  		//To simulate long callback time
	  		setTimeout(function() {  
	  			$scope.templateUrl = response.data.template;
	  			$scope.$apply();
	  		}, 1000); 
	  	});
		
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
		}, {
			'id': '4',
			'type': 'youtube',
			'title': 'Symphony of Science - the Quantum World!',
			'src': 'http://www.youtube.com/watch?v=DZGINaRUEkU',
			'startTime': 0
		}, {
			'id': '5',
			'type': 'Vimeo',
			'title': 'Coffee Propaganda',
			'src': 'http://player.vimeo.com/video/53188831',
			'startTime': 0
		}, {
			'id': '6',
			'type': 'Brightcove',
			'title': 'KV Intro',
			'src': 'http://link.brightcove.com/services/player/bcpid2119278970001?bckey=AQ~~,AAAAAF_5C1k~,SnSLFUsav9w-NDZv_bSTtx9U_sfzp11M&bctid=2245176676001',
			'startTime': 0
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
		$scope.$on('selectedVideo', function() {
			$scope.selectedVideo = videoService.getVideo();
			$scope.$apply();
		});
		// listen for video playback time
		$scope.$on('timeUpdated', function() {
			$scope.playbackTime = videoService.getPlaybackTime();
			$scope.$apply();
		});
});