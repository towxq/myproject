
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>公司首页</title>
    <link rel="stylesheet" type="text/css" href="/css/model/screen.css">
</head>
<body>
<div id="header">
    <div class="header-info clr">
        <div class="logo fl">
            <a href="">
                <img class="fl" src="/images/logo.png" alt="logo picture">
                <span>Reach those who reach to be the best</span>
            </a>
        </div>
        <div class="logo-code fr">
            <a href="" ><img src="/images/logo_code.png" alt="logo picture"></a>
        </div>
    </div>
    <ul class="nav clr">
        <li><a href="">Home</a></li>
        <li  class="current"><a href="">Client Base</a></li>
        <li><a href="">Candidate</a></li>
        <li><a href="">Activitles</a></li>
        <li><a href="">About US</a></li>
    </ul>
</div>
<div id="container" class="clr">
    <div id="left-section">
        <div style="margin:-20px 0 10px 0">
            <img src="/images/banner1.png" alt="branner1" width="700" height="300">
        </div>
        <h3 class="highlight-title mb10"><span></span>Star Candidates</h3>
        <div id="res-content" class="res-content">
            <div id="item_t1" class="item res_current">
                <form class="search-form clr">
                    <div class="form-group">
                        <label>Industry</label>
                        <select>
                            <option value="">- Select Industry -</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Function</label>
                        <select>
                            <option value="">- Select Function -</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>City</label>
                        <select>
                            <option value="">- Select City -</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Keywords</label>
                        <input	class="input-large" type="text" placeholder="input a Keyword">
                    </div>
                    <button type="submit" class="btn btn-default">Search</button>
                </form>
                <h3 class="highlight-title mb10">Quick Search</h3>
                <div class="btn-choice-group">
                    <a class="current btn-choice" href="javascript:void(0);">All</a>
                    <a class="btn-choice" href="javascript:void(0);">Supply Chain & Procurment</a>
                    <a class="btn-choice" href="javascript:void(0);">Operations</a>
                    <a class="btn-choice" href="javascript:void(0);">Human Resources</a>
                    <a class="btn-choice" href="javascript:void(0);">Sales & Marketing</a>
                    <a class="btn-choice" href="javascript:void(0);">General Management</a>
                </div>
                <ul class="res-job">
                    <li>
                        <a href="" data-toggle="modal" data-target="#myModal">
                            <h3>Supply Chain Senior Manager, APAC (Ref:1170039)</h3>
                            <ul>
                                <li>14 years work experience in Purchasing, Sourcing and Supply Chain function,at least 6 years in a managerial role </li>
                                <li>Strong commercial acumen and negotiation expertise</li>
                                <li>Engineering education background; good at analytical thinking and strategy development</li>
                                <li>Intensive cross-functional project management skills and good influence skills</li>
                            </ul>
                            <p class="salary">Current Salary: 480K (Negotiable)</p>
                        </a>
                    </li>
                    <li>
                        <a href="" data-toggle="modal" data-target="#myModal">
                            <h3>Supply Chain Senior Manager, APAC (Ref:1170039)</h3>
                            <ul>
                                <li>14 years work experience in Purchasing, Sourcing and Supply Chain function,at least 6 years in a managerial role </li>
                                <li>Strong commercial acumen and negotiation expertise</li>
                                <li>Engineering education background; good at analytical thinking and strategy development</li>
                                <li>Intensive cross-functional project management skills and good influence skills</li>
                            </ul>
                            <p class="salary">Current Salary: 480K (Negotiable)</p>
                        </a>
                    </li>
                    <li>
                        <a href="" data-toggle="modal" data-target="#myModal">
                            <h3>Supply Chain Senior Manager, APAC (Ref:1170039)</h3>
                            <ul>
                                <li>14 years work experience in Purchasing, Sourcing and Supply Chain function,at least 6 years in a managerial role </li>
                                <li>Strong commercial acumen and negotiation expertise</li>
                                <li>Engineering education background; good at analytical thinking and strategy development</li>
                                <li>Intensive cross-functional project management skills and good influence skills</li>
                            </ul>
                            <p class="salary">Current Salary: 480K (Negotiable)</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div id="right-section">
        <div class="mlr20">
            <h3 class="highlight-title"><span></span>Hot  subscribe</h3>
            <a class="btn-choice current btn-block mb10" href="javascript:void(0);">I’m Client</a>
            <div class="res-content mb20">
                <div class='item res_current'>
                    <form class="subscribe-form clr">
                        <div class="form-group clr">
                            <label>Industry</label>
                            <select>
                                <option value="">- Select Industry -</option>
                            </select>
                        </div>
                        <div class="form-group clr">
                            <label>Function</label>
                            <select>
                                <option value="">- Select Function -</option>
                            </select>
                        </div>
                        <div class="form-group clr">
                            <label>Email</label>
                            <input type="text">
                        </div>
                        <button type="submit" class="btn btn-default">Subscribe</button>
                    </form>
                    <div class="well clr">
                        <div class="line">
								<span>
									<input  readonly="true" type="text" id="viewfile" onmouseout="document.getElementById('pdf').style.display='none';"/>
								</span>
                            <div onmouseover="document.getElementById('pdf').style.display='block';" class="file1">Browse</div>
                            <input type="file" onChange="clickFileName(this)" class="file" id="pdf" name="pdf"/>
                        </div>
                        <button type="submit" class="btn btn-default btn-block">Upload Recruiting Needs</button>
                    </div>
                </div>
                <div class='item'>
                    <form class="subscribe-form clr">
                        <div class="form-group clr">
                            <label>Industry</label>
                            <select>
                                <option value="">- Select Industry -</option>
                            </select>
                        </div>
                        <div class="form-group clr">
                            <label>Function</label>
                            <select>
                                <option value="">- Select Function -</option>
                            </select>
                        </div>
                        <div class="form-group clr">
                            <label>Email</label>
                            <input type="text">
                        </div>
                        <button type="submit" class="btn btn-default">Subscribe</button>
                    </form>
                    <div class="well clr">
                        <div class="line">
								<span>
									<input  readonly="true" type="text" id="viewfile" onmouseout="document.getElementById('pdf').style.display='none';"/>
								</span>
                            <div onmouseover="document.getElementById('pdf').style.display='block';" class="file1">Browse</div>
                            <input type="file" onChange="clickFileName(this)" class="file" id="pdf" name="pdf"/>
                        </div>
                        <button type="submit" class="btn btn-default btn-block">Upload Resume</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="line-top suc_places">
            <h3 class="highlight-title">
                <span></span>Successful Placements<i></i>
            </h3>
            <div class="media">
                <a href="#" class="fl">
                    <img alt=""  src="/images/hot_job1.png">
                </a>
                <div class="media-body">
                    TopicTopicTopicTopicT..
                    TopicTopicTopicTopicT..
                    TopicTopicTopicTopicT..
                    TopicTopicTopicTopicT..
                </div>
            </div>
        </div>
        <div class="line-top recommendation">
            <h3 class="highlight-title mb10"><span></span>Recommendation</h3>
            <ul>
                <li>Recommendation words recommendation wordsRecommendation wordsRecommendation wordsRecommendation wordsRecommendation words.
                    <p>David steff</p>
                </li>
                <li>Recommendation words recommendation wordsRecommendation wordsRecommendation wordsRecommendation wordsRecommendation words.
                    <p>David steff</p>
                </li>
                <li class="more hide">Recommendation words recommendation wordsRecommendation wordsRecommendation wordsRecommendation wordsRecommendation words.
                    <p>David steff</p>
                </li>
                <li class="more hide">Recommendation words recommendation wordsRecommendation wordsRecommendation wordsRecommendation wordsRecommendation words.
                    <p>David steff</p>
                </li>
                <li class="more hide">Recommendation words recommendation wordsRecommendation wordsRecommendation wordsRecommendation wordsRecommendation words.
                    <p>David steff</p>
                </li>
            </ul>
            <div class="bottom-more"><a href="javascript:void(0);" onclick="more3_5()">Click More</a></div>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only"></span></button>
                <p class="modal-info">Thank you for your interest in this. In order to view the full, Please fill in the information below.</p>
            </div>
            <div class="modal-body">
                <form class="subscribe-form clr">
                    <div class="form-group clr">
                        <label>Email</label>
                        <input type="text">
                    </div>
                    <div class="form-group clr">
                        <label>Phone</label>
                        <input type="text">
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
            </div>
            <!-- <div class="modal-footer">
              <button type="button" class="btn btn-primary">提交</button>
            </div> -->
        </div>
    </div>
</div>
<div id="footer">
    <p>2014 © Recruiting-Leila | 沪ICP备05056617号</p>
</div>
<script type="text/javascript" src="/js/model/jquery.js"></script>
<script type="text/javascript" src="/js/model/modal.js"></script>
<script type="text/javascript">
    function more3_5(){
        $('.recommendation .more').toggleClass('hide');
    }
</script>
</body>
</html>