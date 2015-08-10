/*
 * grunt-lib-contrib
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'lib/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          '../../static/js/itz.common.min.js':[
            '../../static/third/jquery-1.9.1.js',
            '../../static/third/jquery.lazyload/jquery.lazyload.min.js',
            '../../static/js/plugins/jquery.itzTip1.js',
            '../../static/js/common.js',
            '../../static/js/event/reglog/reglog.js',
            '../../static/third/luhn.js'
          ],
          '../../static/js/user/min/common.js': [
            '../../static/third/highcharts/highcharts-3.0.7.js',
            '../../static/third/jquery-ui/js/jquery-ui-1.10.3.custom.min.js',
            '../../static/third/jquery-ui/js/datepicker-zh.js',
            '../../static/third/zeroclipboard/ZeroClipboard.js',
            '../../static/third/jquery-pagination/jquery.pagination.js',
            '../../static/third/poshytip-1.2/src/jquery.poshytip.js',
            '../../static/js/plugins/jquery.itzTip.js',
            '../../static/third/jquery-validation/dist/jquery.validate.js',
            '../../static/third/jQuery-File-Upload-9.5.4/js/vendor/jquery.ui.widget.js',
            '../../static/third/jQuery-File-Upload-9.5.4/js/jquery.iframe-transport.js',
            '../../static/third/jQuery-File-Upload-9.5.4/js/jquery.fileupload.js',
            '../../static/third/doT/doT.js',
            '../../static/third/jquery-cookie-master/jquery.cookie.js',
            '../../static/js/user/userCommon.js',
            '../../static/third/intro.js-1.0.0/intro.js'
          ],
          '../../static/js/min/common.js': ['../../static/js/common.js'],
          '../../static/js/user/min/index.js': ['../../static/js/user/index.js'],
          '../../static/js/min/loginPopIframe.js': ['../../static/third/jquery-1.9.1.js','../../static/third/placeholder/jquery.placeholder.js','../../static/js/loginPopIframe.js'],
          '../../static/js/user/min/bond.js': ['../../static/js/user/bond.js'],	
          '../../static/js/user/min/account.js': ['../../static/js/user/account.js'],
          '../../static/js/user/min/coupon.js': ['../../static/js/user/coupon.js'],
          '../../static/js/user/min/invite.js': ['../../static/js/user/invite.js'],
          '../../static/js/user/min/borrow.js': ['../../static/js/user/borrow.js'],
          '../../static/js/user/min/credit.js': ['../../static/js/user/credit.js'],
          '../../static/js/user/min/debt.js': ['../../static/js/user/debt.js'],
          '../../static/js/user/min/recharge.js': ['../../static/js/user/recharge.js'],
          '../../static/js/user/min/rechargeLog.js': ['../../static/js/user/rechargeLog.js'],
          '../../static/js/user/min/remind.js': ['../../static/js/user/remind.js'],
          '../../static/js/user/min/safe.js': ['../../static/js/user/safe.js'],
          '../../static/js/user/min/trade.js': ['../../static/js/user/trade.js'],
          '../../static/js/user/min/userInfo.js': ['../../static/js/user/userInfo.js'],
          '../../static/js/user/min/withdraw.js': ['../../static/js/user/withdraw.js'],
          '../../static/js/user/min/authpop.js': ['../../static/js/user/authpop.js'],
          '../../static/js/user/min/cardmanage.js': ['../../static/js/user/cardmanage.js'],
          '../../static/js/user/min/withdrawlog.js': ['../../static/js/user/withdrawlog.js'],
          '../../static/js/user/min/withdraw_safeCard.js': ['../../static/js/user/withdraw_safeCard.js'],
          '../../static/js/min/forgetPwd.js': ['../../static/js/forgetPwd.js'],
          '../../static/js/min/login.js': [
            '../../static/third/jquery-ui-only-dialog/jquery-ui.min.js',
            '../../static/third/placeholder/jquery.placeholder.min.js',
            '../../static/js/login.js'
          ],
          '../../static/js/min/loginPop.js': ['../../static/js/loginPop.js'],
          '../../static/js/min/register.js': ['../../static/js/register.js'],
          '../../static/js/min/coupon.js': ['../../static/js/coupon.js'],
          '../../static/js/min/oauthSaveinfo.js': ['../../static/js/oauthSaveinfo.js'],
          '../../static/third/min/jquery.validate.js': [
            '../../static/third/jquery-validation/dist/jquery.validate.js',
            '../../static/third/jquery-validation/dist/itouzi-additional-methods.js'
          ],
          '../../static/js/min/index.js': [
            '../../static/js/plugins/jquery.itzTip1.js',
            '../../static/third/slide/responsiveslides.js',
            '../../static/third/countdown/jquery.countdown.js',
            '../../static/third/jquery.lazyload/jquery.lazyload.js',
            '../../static/third/jquery-cookie-master/jquery.cookie.js',
            '../../static/js/index.js',
          ],
          '../../static/js/min/newIndex.js': [
            '../../static/third/slide/responsiveslides.js',
            '../../static/third/countdown/jquery.countdown.js',
            '../../static/third/jquery.lazyload/jquery.lazyload.js',
            '../../static/third/jquery-cookie-master/jquery.cookie.js',
            '../../static/js/newIndex.js',
          ],
          '../../static/js/min/list.js': [
            '../../static/third/doT/doT.min.js',
            '../../static/third/countdown/jquery.countdown.js',
            '../../static/third/jquery-pagination/jquery.pagination.js',
            //'../../static/static/third/modernizr.js',
            '../../static/js/list.js',
          ],
          '../../static/js/min/detail.js': [
            '../../static/third/slide/responsiveslides.js',
            '../../static/third/single-page-nav/jquery.singlePageNav.js',
            '../../static/third/placeholder/jquery.placeholder.js',
            '../../static/third/gallery/blueimp/js/blueimp-gallery.js',
            '../../static/third/gallery/blueimp/js/blueimp-gallery-indicator.js',
            '../../static/third/countdown/jquery.countdown.js',
            '../../static/third/doT/doT.min.js',
            '../../static/third/jquery-pagination/jquery.pagination.js',
            '../../static/js/plugins/min/jquery.itzTip.js',
            '../../static/js/plugins/min/jquery.imgzoom.js',
            '../../static/third/jquery-ui/js/jquery-ui-1.10.3.custom.min.js',
            '../../static/js/loginPop.js',
            '../../static/js/radarchart.js',
            '../../static/js/detail.js',
          ],
          '../../static/js/min/detail_shengxin.js': [
            '../../static/third/placeholder/jquery.placeholder.js',
            '../../static/third/countdown/jquery.countdown.js',
            '../../static/third/doT/doT.min.js',
            '../../static/third/jquery-ui/js/jquery-ui-1.10.3.custom.min.js',
            '../../static/third/jquery-pagination/jquery.pagination.js',
            '../../static/js/loginPop.js',
            '../../static/js/detail_shengxin.js',
          ],
          '../../static/js/min/detail_lingqian.js': [
            '../../static/third/placeholder/jquery.placeholder.js',
            '../../static/third/countdown/jquery.countdown.js',
            '../../static/third/doT/doT.min.js',
            '../../static/third/jquery-ui/js/jquery-ui-1.10.3.custom.min.js',
            '../../static/third/jquery-pagination/jquery.pagination.js',
            '../../static/js/loginPop.js',
            '../../static/js/detail_lingqian.js',
          ],
          '../../static/js/min/confirm.js': [
            '../../static/js/confirm.js',
          ],
          '../../static/js/min/debtList.js': [
            '../../static/third/countdown/jquery.countdown.js',
            '../../static/js/debtList.js',
          ],
          '../../static/js/min/debtDetail.js': [
            '../../static/third/slide/responsiveslides.js',
            '../../static/third/single-page-nav/jquery.singlePageNav.js',
            '../../static/third/placeholder/jquery.placeholder.js',
            '../../static/third/gallery/blueimp/js/blueimp-gallery.js',
            '../../static/third/gallery/blueimp/js/blueimp-gallery-indicator.js',
            '../../static/third/countdown/jquery.countdown.js',
            '../../static/third/jquery-ui/js/jquery-ui-1.10.3.custom.min.js',
            '../../static/js/debtList.js',
            '../../static/js/loginPop.js',
            '../../static/js/radarchart.js',
            '../../static/js/detail.js',
          ],
          '../../static/js/plugins/min/jquery.itzTip.js': [
            '../../static/js/plugins/jquery.itzTip.js',
          ],
          '../../static/js/plugins/min/jquery.imgzoom.js': [
            '../../static/js/plugins/jquery.imgzoom.js',
          ],
          '../../static/wap/js/itz.wap.all.min.js': [
    		'../../static/wap/js/itz.wap.all.js'
    	  ],
          '../../static/wap/js/hb.min.js': [
    		'../../static/wap/js/hb.js'
    	  ],
          '../../static/wap/js/hbwap.min.js': [
    		'../../static/wap/js/hbwap.js'
    	  ],
          '../../static/wap/js/bill2y.min.js': [
    		'../../static/wap/js/bill2y.js'
    	  ],
          '../../static/wap/js/pm.min.js': [
    		'../../static/wap/js/pm.js'
    	  ],
          '../../static/wap/js/game2y.min.js': [
    		'../../static/wap/js/game2y.js'
    	  ],
          '../../static/wap/js/doT.custom.min.js': [
    			'../../static/wap/js/doT.min.js'
    		  ],
          '../../static/js/min/semreg.js': [
            '../../static/third/jquery-ui/js/jquery-ui-1.10.3.custom.min.js',
            '../../static/third/min/jquery.validate.js',
            '../../static/js/plugins/min/jquery.itzTip.js',
            '../../static/third/videoPlayer/video.js',
            '../../static/js/loginPop.js',
            '../../static/third/jquery.cycle/jquery.cycle.all.min.js',
            '../../static/js/semreg.js'
          ],
          '../../static/js/min/semregab.js': [
            '../../static/third/jquery-ui/js/jquery-ui-1.10.3.custom.min.js',
            '../../static/third/min/jquery.validate.js',
            '../../static/js/plugins/min/jquery.itzTip.js',
            '../../static/third/videoPlayer/video.js',
            '../../static/js/loginPop.js',
            '../../static/third/jquery.cycle/jquery.cycle.all.min.js',
            '../../static/js/semreg.js'
          ],
          '../../static/js/min/semreg360.js': [
            '../../static/third/jquery-ui/js/jquery-ui-1.10.3.custom.min.js',
            '../../static/third/rotate/jQueryRotate.min.js',
            '../../static/third/min/jquery.validate.js',
            '../../static/js/plugins/min/jquery.itzTip.js',
            '../../static/third/videoPlayer/video.js',
            '../../static/js/loginPop360.js',
            '../../static/third/jquery.cycle/jquery.cycle.all.min.js',
            '../../static/js/semreg360.js'
          ],
          '../../static/js/min/taohua.js': [
            '../../static/third/jquery-ui/js/jquery-ui-1.10.3.custom.min.js',
            '../../static/third/min/jquery.validate.js',
            '../../static/js/plugins/min/jquery.itzTip.js',
            '../../static/third/videoPlayer/video.js',
            '../../static/js/loginPop.js',
            '../../static/third/jquery.cycle/jquery.cycle.all.min.js',
            '../../static/js/event/taohua.js'
          ],
          '../../static/js/min/event/imovie.js': [
            '../../static/third/countdown/jquery.countdown.js',
            '../../static/js/event/imovie.js'
          ],
          '../../static/js/min/event/shengxin.js': [
            '../../static/third/countdown/jquery.countdown.js',
            '../../static/js/event/shengxin.js'
          ],
          '../../static/js/min/event/ixiaodai.js': [
            '../../static/third/countdown/jquery.countdown.js',
            '../../static/js/event/ixiaodai.js'
          ],
        }
      }
    },
    cssmin: {
      minify: {
        // expand: true,
        // //cwd: '../../static/old/css/',
        // src: ['*.css', '!*.min.css', '!*-min.css'],
        // //dest: '../../static/old/css/',
        // ext: '-min.css'
      },
	  combine: {
	    files: {
    	'../../static/wap/css/itz.wap.all.min.css': [
    			'../../static/wap/css/itz.wap.base.css',
            	'../../static/wap/css/landingpagereg.css',
    	        '../../static/wap/css/flexslider.css',
            	'../../static/wap/css/investHome.css',
        	    '../../static/wap/css/investList.css',
    	        '../../static/wap/css/landingpage.css',
            	'../../static/wap/css/share.css',
            	'../../static/wap/css/confirm.css',
            	'../../static/wap/css/detail.css',
                '../../static/wap/css/about.css',
                '../../static/wap/css/invite.css',
            	'../../static/wap/css/user.css',
            	'../../static/wap/css/jquery.fullpage.css',
    		],
      '../../static/wap/css/itz.wap.all.min.ab.css': [
         '../../static/wap/css/itz.wap.base.css',
             '../../static/wap/css/landingpagereg.css',
              '../../static/wap/css/flexslider.css',
             '../../static/wap/css/investHome.css',
             '../../static/wap/css/investList.css',
              '../../static/wap/css/landingpage.css',
             '../../static/wap/css/share.css',
             '../../static/wap/css/confirm.css',
             '../../static/wap/css/detail.css',
                '../../static/wap/css/about.css',
                '../../static/wap/css/invite.css',
             '../../static/wap/css/user.css',
             '../../static/wap/css/jquery.fullpage.css',
       ],
            '../../static/wap/css/nianbao.min.css': [
                '../../static/wap/css/nianbao.css'
            ],
            '../../static/wap/css/wechat.min.css': [
                '../../static/wap/css/wechat.css'
            ],
            '../../static/css/min.user.css': [
              '../../static/css/base.css',
              '../../static/css/newCommon.css',
              '../../static/third/poshytip-1.2/src/tip-yellow/tip-yellow.css',
              '../../static/third/intro.js-1.0.0/introjs.css',
              '../../static/css/new_user.css',
              '../../static/css/authpop.css',
            ],
            '../../static/css/min.css': [
              '../../static/css/base.css',
               '../../static/css/newCommon.css'
            ],
            '../../static/css/min.semreg.css': [
              '../../static/css/min.css',
              '../../static/css/semReg.css',
              '../../static/css/semReg2.css',
              '../../static/third/videoPlayer/video-js.css'
            ],
            '../../static/css/min.semregab.css': [
              '../../static/css/min.css',
              '../../static/css/semReg.css',
              '../../static/css/semReg2.css',
              '../../static/third/videoPlayer/video-js.css'
            ],
            '../../static/css/min.semreg360.css': [
              '../../static/css/min.css',
              '../../static/css/semReg.css',
              '../../static/css/semReg2.css',
              '../../static/css/semreg360.css',
              '../../static/third/videoPlayer/video-js.css'
            ],
            '../../static/css/min.it168.css': [
              '../../static/css/min.css',
              '../../static/css/semReg.css',
              '../../static/css/it168.css',
              '../../static/third/videoPlayer/video-js.css'
            ],
            '../../static/css/min.shengDetail.css': [
              '../../static/third/jquery-ui/css/blitzer/jquery-ui-1.10.3.custom.min.css',
              '../../static/css/newLogin_pop.css',
              '../../static/css/newDetails.css'
            ],
            '../../static/css/min.xDetail.css': [
              '../../static/third/jquery-ui/css/blitzer/jquery-ui-1.10.3.custom.min.css',
              '../../static/third/gallery/blueimp/css/blueimp-gallery.min.css',
              '../../static/third/gallery/blueimp/css/blueimp-gallery-indicator.css',
              '../../static/css/newLogin_pop.css',
              '../../static/css/xIndex.css'
            ],
            '../../static/css/min.confirm.css': [
              '../../static/third/jquery-ui/css/blitzer/jquery-ui-1.10.3.custom.min.css',
              '../../static/css/xIndex.css',
              '../../static/css/newLogin_pop.css'
            ],
            '../../static/wap/css/game2y.min.css': [
              '../../static/wap/css/game2y.css',
            ],
            '../../static/wap/css/bill.min.css': [
              '../../static/wap/css/bill.css',
            ],
	    }
	  }     
    },
    concat: {
      basic_and_extras: {
        files: {
        '../../static/wap/js/itz.wap.all.js': [
          //'../../static/wap/js/jquery-2.1.1.min.js',
          '../../static/third/jquery-1.9.1.js',
          '../../static/wap/js/doT.min.js',
          '../../static/wap/js/itz.wap.base.js',
          '../../static/wap/js/plugins/itzalert/itzalert.js',
          //'../../static/wap/js/plugins/itzloading/itzloading.js',
          '../../static/wap/js/plugins/itzprogress/itzprogress.js',
          '../../static/wap/js/plugins/itzvisiable/itzvisiable.js',
          '../../static/wap/js/plugins/numberSpark/numberSpark.js',
          '../../static/wap/js/plugins/itzswipe/itzswipe.js',
          '../../static/wap/js/plugins/swipeload/swipeload.js',
          '../../static/wap/js/plugins/flexslider/jquery.flexslider-min.js',
          '../../static/wap/js/index.js',
          '../../static/wap/js/investlist.js',
          '../../static/wap/js/recharge.js',
          '../../static/wap/js/login.js',
          '../../static/wap/js/landingpagereg.js',
          '../../static/wap/js/newreg.js',
          '../../static/wap/js/share.js',
          '../../static/wap/js/confirm.js',
          '../../static/wap/js/detail.js',
          '../../static/wap/js/detail_shengxin.js',
          '../../static/wap/js/coupon.js',
          '../../static/wap/js/record.js',
          '../../static/wap/js/setting.js',
          '../../static/wap/js/withdraw.js',
          '../../static/wap/js/myinvest.js',
          '../../static/wap/js/user.js',
          '../../static/wap/js/safecard.js',
        ],
        '../../static/wap/js/itz.wap.all.ab.js': [
          //'../../static/wap/js/jquery-2.1.1.min.js',
          '../../static/third/jquery-1.9.1.js',
          '../../static/wap/js/doT.min.js',
          '../../static/wap/js/itz.wap.base.js',
          '../../static/wap/js/plugins/itzalert/itzalert.js',
          //'../../static/wap/js/plugins/itzloading/itzloading.js',
          '../../static/wap/js/plugins/itzprogress/itzprogress.js',
          '../../static/wap/js/plugins/itzvisiable/itzvisiable.js',
          '../../static/wap/js/plugins/numberSpark/numberSpark.js',
          '../../static/wap/js/plugins/itzswipe/itzswipe.js',
          '../../static/wap/js/plugins/swipeload/swipeload.js',
          '../../static/wap/js/plugins/flexslider/jquery.flexslider-min.js',
          '../../static/wap/js/index.js',
          '../../static/wap/js/investlist.js',
          '../../static/wap/js/recharge.js',
          '../../static/wap/js/login.js',
          '../../static/wap/js/landingpagereg.js',
          '../../static/wap/js/newreg.js',
          '../../static/wap/js/share.js',
          '../../static/wap/js/confirm.js',
          '../../static/wap/js/detail.js',
          '../../static/wap/js/detail_shengxin.js',
          '../../static/wap/js/coupon.js',
          '../../static/wap/js/record.js',
          '../../static/wap/js/setting.js',
          '../../static/wap/js/withdraw.js',
          '../../static/wap/js/myinvest.js',
          '../../static/wap/js/user.js',
          '../../static/wap/js/safecard.js',
        ],
      }
    }
  }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('default', ['uglify']);

};
