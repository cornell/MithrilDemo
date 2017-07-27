var m = require('mithril')
var User = require('../models/User')

module.exports = {
  oninit: function (vnode) {
    console.log(vnode)
    User.load(vnode.attrs.id)
  },
  view: function () {
    return m('form', {
      onsubmit: function (e) {
        e.preventDefault()
        User.save()
      }
    }, [
      m('label.label', 'First name'),
      m('input.input[type=text][placeholder=First name]', {
        oninput: m.withAttr('value', function (value) {
          User.current.prenom = value
        }),
        value: User.current.prenom
      }),
      m('label.label', 'Last name'),
      m('input.input[placeholder=Last name]', {
        oninput: m.withAttr('value', function (value) {
          User.current.nom = value
        }),
        value: User.current.nom
      }),
      m('button.button[type=submit]', 'Save')
    ])
  }
}
