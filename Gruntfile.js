/**
 * Created by Shitao Xu(14088754) on 4/15/2015.
 */
module.exports = function(grunt) {
    // 加载所有任务
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    // 初始化任务配置对象
    grunt.initConfig({
        // package.json 文件读取项目配置并存入 pkg 属性中
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            /* 合并js文件 */
            options: {
                separator: ';',
                stripBanners: true
            },
            dist: {
                src: [
                    'public/javascripts/focus.js'
                ],
                dest: 'public/javascripts/<%= pkg.name %>.js'
            }
        },
        uglify: {
            /* 压缩js文件 */
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'public/javascripts/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },


        /* scss任务 */
        sass: {
            dev: {
                /* sass开发选项 */
                options: {
                    style: 'expanded' // expanded  compact  compressed
                },
                files: {
                    'public/stylesheets/wyq.css': 'public/sass/wyq.scss'
                }
            },
            /* sass发布选择 */
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'public/stylesheets/wyq.css': 'public/sass/wyq.scss',
                }
            }
        },

        cssc: {
            /*grunt-cssc可以将CSS规则合并起来，以此来确保生成的CSS拥有最少的重复*/
            build: {
                options: {
                    consolidateViaDeclarations: true,
                    consolidateViaSelectors:    true,
                    consolidateMediaQueries:    true
                },
                files: {
                    'public/stylesheets/wyq.css': 'public/stylesheets/wyq.css'
                }
            }
        },

        cssmin: {
            /*压缩 CSS 文件为 .min.css */
            options: {
                //keepSpecialComments: '*' /* 移除 CSS 文件中的所有注释 */
            },
            minify: {
                expand: true,   // 启用下面的选项
                cwd: 'public/stylesheets/', // 指定待压缩的文件路径
                src: ['*.css', '!*.min.css'],   // 匹配相对于cwd目录下的所有css文件(排除.min.css文件)
                dest: 'public/stylesheets/',    // 生成的压缩文件存放的路径
                ext: '.min.css' // 生成的文件都使用.min.css替换原有扩展名，生成文件存放于dest指定的目录中
            }
        },


        imagemin: {
            /* 压缩优化图片大小 */
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: 'public/images/',
                    src: ['**/*.{png,jpg,jpeg}'], // 优化 images 目录下所有 png/jpg/jpeg 图片
                    dest: 'public/images/' // 优化后的图片保存位置，默认覆盖
                }]
            }
        },


        watch: {
            /* 监控文件变化并执行相应任务 */
            //监测.js文件
            js: {
                files: ['public/javascripts/**/*.js'],
                tasks:['uglify']
            },
            //监测.scss文件
            sass: {
                files: ['public/sass/**/*.scss'],
                tasks: ['sass:dev']
            },
            //监测.css文件
            css: {
                files: ['public/sass/**/*.scss'],
                //tasks: ['dist_css']
            },

            //监测.png,.jpg,.jpeg文件
            img: {
                files: ['public/images/**/*.{png,jpg,jpeg}']
            },

            //Live reload文件
            livereload: {
                options: {
                    livereload: true,
                    event: ['changed', 'added']
                },
                files: [
                    'public/stylesheets/**/*.css',
                    'views/**/*.css'
                ],
            }
        }

    });
    //创建默认任务
    grunt.registerTask('default', ['sass:dev']);
    grunt.registerTask('dist_js',  ['concat','uglify']);
    grunt.registerTask('dist_css',  ['sass', 'cssc', 'cssmin']);
    //创建发布任务
    grunt.registerTask('dist', ['sass:dist', 'cssc', 'cssmin','concat','uglify','imagemin']);
};