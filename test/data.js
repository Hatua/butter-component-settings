export default {
    "tabs": [{
        title: "General",
        id: "general",
        items: [{
            id: "activateTorrentCollection",
            icon: "collections_bookmark",
            title: "Torrent Collection",
            helper: "Display a view with your Torrent Collection",
            action: {
                type: "SWITCH"
            }
        }, {
            id: "activateWatchlist",
            icon: "remove_red_eye",
            title: "Watchlist",
            helper: "Display a view with your Watchlist",
            action: {
                type: "SWITCH"
            }
        }, {
            id: "activateRandomize",
            icon: "shuffle",
            title: "Randomize Button",
            helper: "Display a button to select a Random Movie in the Current View",
            advanced: true,
            action: {
                type: "SWITCH"
            }
        }, {
            id: "movies_quality",
            icon: "sort",
            title: "Content Quality",
            helper: "Only show content in this quality",
            advanced: true,
            action: {
                type: "DROPDOWN",
                options: ["all", "1080p", "720p"]
            }
        }, {
            id: "moviesShowQuality",
            icon: "high_quality",
            title: "Show Quality",
            helper: "Display Content Quality in List view",
            advanced: true,
            action: {
                type: "SWITCH"
            }
        }, {
            id: "alwaysFullscreen",
            icon: "fullscreen",
            title: "Fullscreen",
            helper: "Always start playback in FullScreen mode",
            advanced: true,
            action: {
                type: "SWITCH"
            }
        }, {
            id: "playNextEpisodeAuto",
            icon: "queue_play_next",
            title: "Play Next",
            helper: "Automatically play next Episode",
            advanced: true,
            action: {
                type: "SWITCH"
            }
        }, {
            id: "connectionLimit",
            icon: "settings_applications",
            title: "Connection Limit",
            helper: "Limit the amount of Outbound Connection Butter will open",
            advanced: true,
            action: {
                type: "TEXT"
            }
        }, {
            id: "streamPort",
            icon: "settings_applications",
            title: "Stream Port",
            helper: "Port to stream on, randomlly choosen if 0",
            advanced: true,
            action: {
                type: "TEXT"
            }
        }, {
            id: "overallRatio",
            icon: "settings_applications",
            title: "Overall Ratio",
            helper: "Downloaded so far:",
            advanced: true,
            action: {
                type: "TEXT"
            }
        }, {
            id: "cache-directory",
            icon: "folder",
            title: "Cache Directory",
            helper: "Open the Directory where Butter keeps it's Cache",
            advanced: true,
            action: {
                type: "BUTTON",
                text:"Open"
            }
        }, {
            id: "deleteTmpOnClose",
            icon: "delete",
            title: "Clear Cache",
            helper: "Delete temp folder after closing the App",
            advanced: true,
            action: {
                type:"SWITCH"
            }
        }]
    }, {
        title: "Interface",
        id: "interface",
        items: [{
            icon: "collections_bookmark",
            title: "Torrent Collection",
            helper: "Display a view with your Torrent Collection",
            action: {
                type: "SWITCH"
            }
        }, {
            icon: "folder",
            title: "Cache Directory",
            helper: "Open the Directory where Butter keep it's cache",
            action: {
                type: "BUTTON",
                text: "Open"
            }
        }, {
            icon: "format_paint",
            title: "Theme",
            helper: "Select a different Look&Feel for the App",
            action: {
                type: "DROPDOWN",
                options: ["dark", "pink"],
                apply: (theme) =>
                    (document.getElementById('root').className = `theme-${theme}`)
            }
        }, {
            icon: "location_on",
            title: "IP Adress",
            helper: "Set this machine's IP Adress",
            action: {
                type: "TEXT"
            }
        }]
    }, {
        title: "Subtitles",
        id: "subtitles",
        items: []
    }, {
        title: "Extensions",
        id: "extensions",
        items: []
    }, {
        title: "Providers",
        id: "providers",
        items: []
    }],
    settings: new Object({
        set: function () {console.log(arguments)},
        "projectName": "Butter",
        "projectUrl": "http://butterproject.org",
        "projectTwitter": "butterproject",
        "projectFacebook": "ButterProjectOrg",
        "projectGooglePlus": "ButterProject",
        "projectBlog": "http://blog.butterproject.org/",
        "projectForum": "https://www.reddit.com/r/ButterProject",
        "statusUrl": "https://status.butterproject.org",
        "changelogUrl": "https://github.com/butterproject/butter-desktop/commits/master",
        "issuesUrl": "https://github.com/butterproject/butter-desktop/issues",
        "sourceUrl": "https://github.com/butterproject/butter-desktop/",
        "commitUrl": "https://github.com/butterproject/butter-desktop/commit",
        "updateKey": "-----BEGIN PUBLIC KEY-----\nMIIBtjCCASsGByqGSM44BAEwggEeAoGBAPNM5SX+yR8MJNrX9uCQIiy0t3IsyNHs\nHWA180wDDd3S+DzQgIzDXBqlYVmcovclX+1wafshVDw3xFTJGuKuva7JS3yKnjds\nNXbvM9CrJ2Jngfd0yQPmSh41qmJXHHSwZfPZBxQnspKjbcC5qypM5DqX9oDSJm2l\nfM/weiUGnIf7AhUAgokTdF7G0USfpkUUOaBOmzx2RRkCgYAyy5WJDESLoU8vHbQc\nrAMnPZrImUwjFD6Pa3CxhkZrulsAOUb/gmc7B0K9I6p+UlJoAvVPXOBMVG/MYeBJ\n19/BH5UNeI1sGT5/Kg2k2rHVpuqzcvlS/qctIENgCNMo49l3LrkHbJPXKJ6bf+T2\n8lFWRP2kVlrx/cHdqSi6aHoGTAOBhAACgYBTNeXBHbWDOxzSJcD6q4UDGTnHaHHP\nJgeCrPkH6GBa9azUsZ+3MA98b46yhWO2QuRwmFQwPiME+Brim3tHlSuXbL1e5qKf\nGOm3OxA3zKXG4cjy6TyEKajYlT45Q+tgt1L1HuGAJjWFRSA0PP9ctC6nH+2N3HmW\nRTcms0CPio56gg==\n-----END PUBLIC KEY-----\n",
    "opensubtitles": {
      "useragent": "Butter"
    },
    "trakttv": {
      "client_id": "647c69e4ed1ad13393bf6edd9d8f9fb6fe9faf405b44320a6b71ab960b4540a2",
      "client_secret": "f55b0a53c63af683588b47f6de94226b7572a6f83f40bd44c58a7c83fe1f2cb1"
    },
    "tvshowtime": {
      "client_id": "iM2Vxlwr93imH7nwrTEZ",
      "client_secret": "ghmK6ueMJjQLHBwsaao1tw3HUF7JVp_GQTwDwhCn"
    },
    "fanart": {
      "api_key": "8104b601679c3ec23e7d3e4d93ddb46f"
    },
    "tvdb": {
      "api_key": "9845B685B799009C"
    },
    "tmdb": {
      "api_key": "1a83b1ecd56e3ac0e509b553b68c77a9"
    },
    "tabs": {
      "movie": {
        "order": 1,
        "name": "Movies",
        "providers": [
          "vodo",
          "archive"
        ]
      },
      "tvshow": {
        "order": 2,
        "name": "Series",
        "providers": [
          "youtube?channel=kurzgesagt",
          "youtube?channel=devinsupertramp",
          "youtube?channel=TEDtalksDirector",
          "youtube?channel=BadLipReading",
          "youtube?channel=1veritasium",
          "youtube?channel=enyay",
          "youtube?channel=CinemaSins",
          "youtube?channel=TomSka",
          "youtube?channel=ExplosmEntertainment",
          "youtube?channel=everyframeapainting",
          "youtube?channel=willunicycleforfood",
          "ccc?langs=[\"eng\"]&formats=[\"video/mp4\",\"video/webm\"]&urlList=[\"http://localhost:8080/\"]"
        ]
      },
      "test": {
        "name": "Test",
        "providers": [
          "ccc",
          "vodo"
        ]
      }
    },
    "providers": {
      "subtitle": "OpenSubtitles",
      "metadata": "Trakttv",
      "tvst": "TVShowTime",
      "torrentCache": "TorrentCache"
    },
    "trackers": {
      "blacklisted": [
        "demonii"
      ],
      "forced": [
        "udp://tracker.coppersurfer.tk:6969/announce",
        "udp://glotorrents.pw:6969/announce",
        "udp://exodus.desync.com:6969/announce",
        "udp://tracker.opentrackr.org:1337/announce",
        "udp://9.rarbg.com:2710/announce",
        "udp://tracker.openbittorrent.com:80",
        "udp://tracker.publicbt.com:80/announce"
      ]
    },
    "language": "en",
    "translateSynopsis": true,
    "coversShowRating": true,
    "watchedCovers": "fade",
    "showAdvancedSettings": false,
    "postersMinWidth": 134,
    "postersMaxWidth": 294,
    "postersMinFontSize": 0.8,
    "postersMaxFontSize": 1.3,
    "postersSizeRatio": 1.462686567164179,
    "postersWidth": 134,
    "postersJump": [
      134,
      154,
      174,
      194,
      214,
      234,
      254,
      274,
      294
    ],
    "alwaysFullscreen": false,
    "playNextEpisodeAuto": true,
    "chosenPlayer": "local",
    "alwaysOnTop": false,
    "theme": "Official_-_Experimental_theme.css",
    "ratingStars": true,
    "hideSeasons": true,
    "startScreen": "movie",
    "lastTab": "",
    "rememberFilters": false,
    "shows_default_quality": "720p",
    "movies_default_quality": "720p",
    "moviesShowQuality": false,
    "movies_quality": "all",
    "subtitle_language": "none",
    "subtitle_size": "28px",
    "subtitle_color": "#ffffff",
    "subtitle_decoration": "Outline",
    "subtitle_font": "Arial",
    "httpApiPort": 8008,
    "httpApiUsername": "butter",
    "httpApiPassword": "butter",
    "traktStatus": false,
    "traktLastSync": false,
    "traktLastActivities": false,
    "traktSyncOnStart": true,
    "traktPlayback": true,
    "tvstAccessToken": "",
    "opensubtitlesAutoUpload": true,
    "opensubtitlesAuthenticated": false,
    "opensubtitlesUsername": "xaiki",
    "opensubtitlesPassword": "caca",
    "connectionLimit": 55,
    "streamPort": 0,
    "tmpLocation": "/tmp/Butter",
    "databaseLocation": "/home/xaiki/.config/Butter/Default/data",
    "deleteTmpOnClose": true,
    "automaticUpdating": true,
    "events": true,
    "minimizeToTray": false,
    "bigPicture": false,
    "activateTorrentCollection": false,
    "activateWatchlist": true,
    "activateRandomize": true,
    "onlineSearchEngine": "KAT",
    "totalDownloaded": 15859712,
    "totalUploaded": 0,
    "updateEndpoint": {
      "url": "https://butterproject.org/",
      "index": 0,
      "proxies": [
        {
          "url": "https://butterproject.org/",
          "fingerprint": ""
        },
        {
          "url": "https://butterproject.github.io/",
          "fingerprint": ""
        }
      ]
    },
    "version": "0.3.8-5a",
    "dbversion": "0.1.0",
    "font": "tahoma",
    "defaultWidth": 1280,
    "defaultHeight": 720,
    "playerSubPosition": "0px",
    "playerVolume": "1.0",
    "tv_detail_jump_to": "firstUnwatched",
    "opensubtitles-username": "testo",
    "showAdvancedsettings": true,
    "lastWatchedTitle": "L5",
    "arch": "x64",
    "releaseName": "There's nothing on TV",
    "os": "linux",
    "opensubtitles-password": "blah",
    "lastWatchedTime": -3.167977,
    "disclaimerAccepted": 1
  })
}

