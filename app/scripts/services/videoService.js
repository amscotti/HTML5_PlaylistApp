'use strict';

angular.module('knowledgevisionHtml5PlaylistappApp')
  .factory('videoService', function($rootScope) {
  var video = null;
  var startTime = null;
  var videoElement = null;
  var playbackTime = 10;
  var api = {
    setVideo: function(videoObj) {
      video = videoObj;
      startTime = video.startTime;
      $rootScope.$broadcast('selectedVideo');
    },
    getVideo: function() {
      return angular.copy(video);
    },
    trackPlayback: function(time) {
      playbackTime = time;
      $rootScope.$broadcast('timeUpdated');
    },
    getPlaybackTime: function() {
      return playbackTime;
    },
    getVideoStartTime: function() {
      return angular.copy(startTime);
    },
    setVideoElement: function(videoElm) {
      videoElement = videoElm;
    },
    on: function(eventName, callBack) {
      videoElement.on(eventName, function() {
        var args = arguments;
        $rootScope.$apply(function() {
          callBack.apply(videoElement, args);
        });
      });
    }
  };
  return api;
});