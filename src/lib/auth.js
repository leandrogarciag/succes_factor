module.exports = {

    isLoggedIn (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/Login');
    },

    isNotLoggedIn (req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/redirect');
    },

};