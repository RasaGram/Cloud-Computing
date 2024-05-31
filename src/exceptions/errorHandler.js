function errorHandler(err, req, res, next) {
    if (err) {
        res.status(400).json({
            message: err.message || 'Something went wrong!',
        });
    } else {
        next();
    }
}

module.exports = errorHandler;