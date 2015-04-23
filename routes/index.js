var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 网站地图
router.get('/sitemap', function(req, res, next) {
    res.render('sitemap', { title: '网站地图' });
});


// 创作者
router.get('/author/author_person', function(req, res, next) {
    res.render('author/author_person', { title: '创作者-找个人' });
});
router.get('/author/author_org', function(req, res, next) {
    res.render('author/author_org', { title: '创作者-找机构' });
});
router.get('/author/author_attention', function(req, res, next) {
    res.render('author/author_attention', { title: '创作者-我的创作者-我关注的创作者' });
});
router.get('/author/author_blog', function(req, res, next) {
    res.render('author/author_blog', { title: '创作者-个人页' });
});


// 作品
router.get('/works/works_video_list', function(req, res, next) {
    res.render('works/works_video_list', { title: '作品-视频作品' });
});
router.get('/works/works_video_content', function(req, res, next) {
    res.render('works/works_video_content', { title: '作品-视频作品内页' });
});
router.get('/works/works_video_pub', function(req, res, next) {
    res.render('works/works_video_pub', { title: '作品-发布视频作品' });
});
router.get('/works/works_video_col', function(req, res, next) {
    res.render('works/works_video_col', { title: '作品-我收藏的视频作品' });
});


// 专栏
router.get('/column/column_myatt', function(req, res, next) {
    res.render('column/column_myatt', { title: '专栏-我的关注' });
});
router.get('/column/column_unmyatt', function(req, res, next) {
    res.render('column/column_unmyatt', { title: '专栏-我的关注-未关注专栏' });
});
router.get('/column/column_article_list', function(req, res, next) {
    res.render('column/column_article_list', { title: '专栏-最新文章' });
});
router.get('/column/column_article_content', function(req, res, next) {
    res.render('column/column_article_content', { title: '专栏-文章内页' });
});
router.get('/column/column_article_hots', function(req, res, next) {
    res.render('column/column_article_hots', { title: '专栏-热门文章' });
});
router.get('/column/column_rec', function(req, res, next) {
    res.render('column/column_rec', { title: '专栏-专栏推荐' });
});
router.get('/column/column_content', function(req, res, next) {
    res.render('column/column_content', { title: '专栏-专栏内页' });
});
router.get('/column/column_article_pub', function(req, res, next) {
    res.render('column/column_article_pub', { title: '专栏-发表文章' });
});
router.get('/column/column_edit', function(req, res, next) {
    res.render('column/column_edit', { title: '专栏-编辑专栏' });
});
router.get('/column/column_myarticle', function(req, res, next) {
    res.render('column/column_myarticle', { title: '专栏-我的专栏-我发表的文章' });
});
router.get('/column/column_myatt_col', function(req, res, next) {
    res.render('column/column_myatt_col', { title: '专栏-我的专栏-我关注的专栏' });
});


// 小组
router.get('/group/group_mytopic', function(req, res, next) {
    res.render('group/group_mytopic', { title: '小组-我的话题' });
});
router.get('/group/group_mytopic_unjoin', function(req, res, next) {
    res.render('group/group_mytopic_unjoin', { title: '小组-我的话题-未加入小组' });
});
router.get('/group/group_topic_list', function(req, res, next) {
    res.render('group/group_topic_list', { title: '小组-最新话题' });
});
router.get('/group/group_topic_hots', function(req, res, next) {
    res.render('group/group_topic_hots', { title: '小组-热门话题' });
});
router.get('/group/group_rec', function(req, res, next) {
    res.render('group/group_rec', { title: '小组-小组推荐' });
});
router.get('/group/group_topic_content', function(req, res, next) {
    res.render('group/group_topic_content', { title: '小组-话题内页' });
});
router.get('/group/group_content', function(req, res, next) {
    res.render('group/group_content', { title: '小组-小组内页' });
});
router.get('/group/group_topic_pub', function(req, res, next) {
    res.render('group/group_topic_pub', { title: '小组-发新话题' });
});
router.get('/group/group_create', function(req, res, next) {
    res.render('group/group_create', { title: '小组-创建小组' });
});
router.get('/group/group_topic_par', function(req, res, next) {
    res.render('group/group_topic_par', { title: '小组-我的小组-我参与的话题' });
});
router.get('/group/group_join', function(req, res, next) {
    res.render('group/group_join', { title: '小组-我的小组-我加入的小组' });
});


// 集市
router.get('/market/market_list', function(req, res, next) {
    res.render('market/market_list', { title: '集市-最新发布' });
});
router.get('/market/market_talent', function(req, res, next) {
    res.render('market/market_talent', { title: '集市-人员招募' });
});
router.get('/market/market_info_pub', function(req, res, next) {
    res.render('market/market_info_pub', { title: '集市-发布信息' });
});
router.get('/market/market_info_content', function(req, res, next) {
    res.render('market/market_info_content', { title: '集市-信息内页' });
});
router.get('/market/market_my', function(req, res, next) {
    res.render('market/market_my', { title: '集市-我的集市' });
});


// 搜索
router.get('/search/search_person', function(req, res, next) {
    res.render('search/search_person', { title: '搜索-个人' });
});
router.get('/search/search_org', function(req, res, next) {
    res.render('search/search_org', { title: '搜索-机构' });
});
router.get('/search/search_video', function(req, res, next) {
    res.render('search/search_video', { title: '搜索-视频' });
});
router.get('/search/search_article', function(req, res, next) {
    res.render('search/search_article', { title: '搜索-文章' });
});
router.get('/search/search_column', function(req, res, next) {
    res.render('search/search_column', { title: '搜索-专栏' });
});
router.get('/search/search_topic', function(req, res, next) {
    res.render('search/search_topic', { title: '搜索-话题' });
});
router.get('/search/search_group', function(req, res, next) {
    res.render('search/search_group', { title: '搜索-小组' });
});
router.get('/search/search_info', function(req, res, next) {
    res.render('search/search_info', { title: '搜索-信息' });
});


module.exports = router;
