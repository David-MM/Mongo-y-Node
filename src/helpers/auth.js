const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error_msg', 'No Aurotizado. Inicia Sección, para continuar.');
    res.redirect('/users/signin');
};
module.exports = helpers;