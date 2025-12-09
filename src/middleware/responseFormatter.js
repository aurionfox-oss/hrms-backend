const responseFormatter = () => (req, res, next) => {
  res.success = (message = 'Success', data = null, status = 200) =>
    res.status(status).json({ success: true, message, data });

  res.fail = (message = 'Error', status = 400, errors = null) =>
    res.status(status).json({ success: false, message, errors });

  next();
};

module.exports = responseFormatter;

