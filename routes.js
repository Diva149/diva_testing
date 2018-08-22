const express = require('express'),
router = express.Router(),
path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname}/footer_test/footer_ui.html`));
});
module.exports = router;