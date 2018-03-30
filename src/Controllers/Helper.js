

class Helper {
    successHandler(msg, res) {
        res.status(200).json({
            success: true,
            data: msg
        })
    }

    errodHandler(err, status, res) {
        res.status(status).json({
            success: false,
            error: err
        })
    }
}

export default new Helper()