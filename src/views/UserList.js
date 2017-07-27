var m = require('mithril')
var User = require('../models/User')
// import User from '../models/User';

module.exports = {
  oninit: User.loadList,
  view: function () {
    return m('.UserList', User.list.map(function (user) {
      return m('a.UserList-item', {
        href: '/edit/' + user.id,
        oncreate: m.route.link
      }, user.firstName + ' ' + user.lastName)
    }))
  }
}
