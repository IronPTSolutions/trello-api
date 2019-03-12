const createError = require('http-errors');
const User = require('../models/user.model');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


passport.serializeUser((user, next) => {
  next(null, user.id);
});

passport.deserializeUser((id, next) => {
  User.findById(id)
    .then(user => next(null, user))
    .catch(next)
});


passport.use('auth-local', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, next) => {
  User.findOne({ email: email })
    .then(user => {
      console.log('USWER', user);
      if (!user) {
        next(null, false, 'Invalid email or password')
      } else {
        return user.checkPassword(password)
          .then(match => {
            if (!match) {
              next(null, false, 'Invalid email or password')
            } else {
              next(null, user)
            }
          })
      }
    })
    .catch(error => next(error))
}));