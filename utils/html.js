
const renderFooter=()=>{
    let dev_html='';

    dev_html+=`<div style="opacity: 0.6; background-color: #979797;height: 1px;width: 100%;margin-bottom:10px;"></div>
    <div class="row  ft-bt-links">
    <div class="col-sm-6">
    <a href="https://byjus.com/disclaimer">Disclaimer</a> &nbsp;|&nbsp;
    <a href="https://byjus.com/privacy-policy">Privacy Policy</a> &nbsp;|&nbsp;
    <a href="https://byjus.com/terms-of-services">Terms of Services</a> &nbsp;|&nbsp;
    <a href="https://byjus.com/sitemap.xml">Sitemap</a>
    </div>
    <div class="col-sm-6 text-right">
                                &copy;&nbsp;2018, BYJU'S. All rights reserved.
                                </div>
    </div>`
    return dev_html;
}

module.exports=renderFooter;
