const error_validation = async (err, req, res, next) => {
    
    console.error(err);

    return res.json({
        message: "Something went wrong",
        status: false,
        data: err
    });

}

module.exports = error_validation;