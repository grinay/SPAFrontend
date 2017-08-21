module.exports = {
  request: function (req, token) {
    this.options.http._setHeaders.call(this, req, {Authorization: 'Bearer ' + token});
  },
  response: function (res) {
    var token = res.body.access_token;

    if (token) {
      return token;
    }
  }
}
